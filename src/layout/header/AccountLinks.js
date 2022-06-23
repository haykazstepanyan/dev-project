import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { HoverableDropdown } from "../../components/dropdown";
import { iconsStyles } from "./styles";
import MiniShoppingCart from "../../components/miniShoppingCart";
import Drawer from "../../components/drawer";

function AccountLinks() {
  const userRole = useSelector((state) => state.auth.userData?.role);

  const classes = iconsStyles();
  let linkNameToAccount;
  let allowedLinks;
  if (userRole) {
    linkNameToAccount =
      userRole === "ADMIN" || userRole === "MAIN_ADMIN"
        ? "/admin"
        : "/account/dashboard";
    allowedLinks = [
      {
        item: (
          <Link key="account" to={linkNameToAccount}>
            My account
          </Link>
        ),
        key: "account",
      },

      { item: "Shopping cart", key: "shoppingCart" },
      { item: "Wishlist", key: "wishlist" },
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
      <Link to="/wishlist">
        <FavoriteBorderIcon className={classes.icons} />
      </Link>
      <Drawer
        anchorDirection="right"
        OpenIcon={WorkOutlineIcon}
        outline={false}
      >
        <MiniShoppingCart />
      </Drawer>
    </Grid>
  );
}

export default AccountLinks;
