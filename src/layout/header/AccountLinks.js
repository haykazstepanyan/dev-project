import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Grid,
  Dialog,
  DialogTitle,
  DialogActions,
  IconButton,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { HoverableDropdown } from "../../components/dropdown";
import { signOut } from "../../redux/auth/actions";
import MiniShoppingCart from "../../components/miniShoppingCart";
import Drawer from "../../components/drawer";
import Button from "../../components/button";
import { iconsStyles } from "./styles";
import useToggle from "../../hooks/useToggle";
import { hideLoader, setCurrency, showLoader } from "../../redux/app/appSlice";
import useLazyFetch from "../../hooks/useLazyFetch";
import { currencyList, CURRENCY_API_KEY } from "../../constants/constants";
import SignInModal from "../../components/modals/SignInModal";

function AccountLinks() {
  const [signOutModal, setSignOutModal] = useState(false);
  const [signInModal, setSignInModal] = useState(false);
  const [anchor, setAnchor] = useToggle();
  const role = useSelector((state) => state.auth.role);
  const selectedCurrency = useSelector((state) => state.app.currency);
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = iconsStyles();

  const currencies = currencyList.map((item) => ({
    item:
      item === selectedCurrency ? (
        <span className={classes.selectedCurrency}>{item}</span>
      ) : (
        item
      ),
    key: item,
  }));

  const toggleDrawer = () => {
    setAnchor();
  };

  const handleSignOut = () => {
    dispatch(signOut());
    setSignOutModal(false);
  };
  const { loading: ratesLoading, lazyRefetch: ratesRefetch } = useLazyFetch();

  useEffect(() => {
    if (ratesLoading) {
      dispatch(showLoader({ key: "getRates" }));
    } else {
      dispatch(hideLoader({ key: "getRates" }));
    }
  }, [dispatch, ratesLoading]);

  const handleCurrencyChange = (key) => {
    localStorage.removeItem("currency");
    localStorage.setItem("currency", key);

    const rates = JSON.parse(localStorage.getItem("rates"));

    if (!rates || (rates && new Date(rates.date) < Date.now())) {
      console.log("There is no rates or date is expired");
      ratesRefetch(
        `https://api.apilayer.com/exchangerates_data/latest?symbols=${currencyList.join(
          ",",
        )}&base=USD`,
        {
          redirect: "follow",
          headers: {
            apikey: CURRENCY_API_KEY,
          },
        },
        undefined,
        true,
      ).then((res) => {
        const ratesDate = new Date(res.date);

        ratesDate.setHours(12, 0, 0, 0);
        ratesDate.setDate(ratesDate.getDate() + 1);

        const dataForStorage = JSON.stringify({
          base: "USD",
          date: ratesDate.toLocaleString(),
          currencyRates: res.rates,
        });

        localStorage.setItem("rates", dataForStorage);
      });
    }
    console.log("checking localstorage - ", rates);
    dispatch(setCurrency(key));
  };

  const handleWishlistRoute = () => {
    if (isAuth) {
      return navigate("/wishlist");
    }
    setSignInModal(true);
    return null;
  };

  const signOutModalElement = (
    <Dialog
      open={signOutModal}
      onClose={() => setSignOutModal(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <div style={{ padding: 20 }}>
        <DialogTitle
          id="alert-dialog-title"
          style={{ padding: 0, marginBottom: 20 }}
        >
          Are you sure you want to sign out?
        </DialogTitle>
        <DialogActions>
          <Button
            purpose="modalCancel"
            onClick={() => setSignOutModal(false)}
            disableRipple
          >
            Cancel
          </Button>
          <Button color="primary" onClick={handleSignOut} disableRipple>
            Sign Out
          </Button>
        </DialogActions>
      </div>
    </Dialog>
  );

  let allowedLinks;
  if (role) {
    const linkToAccount =
      role === "ADMIN" || role === "MAIN_ADMIN"
        ? "/admin/brand"
        : "/account/dashboard";

    allowedLinks = [
      {
        item: (
          <Link key="account" to={linkToAccount}>
            {role === "ADMIN" || role === "MAIN_ADMIN"
              ? "Admin Panel"
              : "My account"}
          </Link>
        ),
        key: "account",
      },
      { item: "Shopping cart", key: "shoppingCart" },
      { item: "Wishlist", key: "wishlist" },
      {
        item: (
          <Button
            key="signout"
            color="info"
            purpose="dropdownBtn"
            onClick={() => setSignOutModal(true)}
            disableRipple
          >
            Sign out
          </Button>
        ),
        key: "signout",
      },
    ];
  } else {
    allowedLinks = [
      {
        item: (
          <Link key="signin" to="/signin">
            Sign In
          </Link>
        ),
        key: "signIn",
      },
      {
        item: (
          <Link key="signup" to="/signup">
            Sign Up
          </Link>
        ),
        key: "signUp",
      },
    ];
  }

  return (
    <Grid item md={2} className={classes.iconsContainer}>
      <HoverableDropdown value={<PeopleOutlineIcon />} list={allowedLinks} />
      <IconButton
        onClick={handleWishlistRoute}
        className={classes.wishlistIconBtn}
      >
        <FavoriteBorderIcon className={classes.icons} />
      </IconButton>
      <Drawer
        open={anchor}
        toggleDrawer={toggleDrawer}
        anchorDirection="right"
        OpenIcon={WorkOutlineIcon}
        outline={false}
      >
        <MiniShoppingCart />
      </Drawer>
      <HoverableDropdown
        value={<CurrencyExchangeIcon />}
        list={currencies}
        change={handleCurrencyChange}
      />
      {signOutModalElement}
      <SignInModal
        open={signInModal}
        closeModal={() => setSignInModal(false)}
      />
    </Grid>
  );
}

export default AccountLinks;
