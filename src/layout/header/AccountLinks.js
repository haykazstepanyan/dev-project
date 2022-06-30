import { useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Dialog, DialogTitle, DialogActions } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { HoverableDropdown } from "../../components/dropdown";
import { signOut } from "../../redux/auth/actions";
import MiniShoppingCart from "../../components/miniShoppingCart";
import Drawer from "../../components/drawer";
import Button from "../../components/button";
import { iconsStyles } from "./styles";

function AccountLinks() {
  const [openModal, setOpenModal] = useState(false);
  const role = useSelector((state) => state.auth.role);
  const dispatch = useDispatch();

  const classes = iconsStyles();

  const onModalClose = () => {
    setOpenModal(false);
  };
  const onModalOpen = () => {
    setOpenModal(true);
  };
  const handleSignOut = () => {
    dispatch(signOut());
    onModalClose();
  };
  const logoutModal = (
    <Dialog
      open={openModal}
      onClose={onModalClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Are you sure you want to sign out?
      </DialogTitle>
      <DialogActions>
        <Button purpose="modalCancel" onClick={onModalClose} disableRipple>
          Cancel
        </Button>
        <Button color="primary" onClick={handleSignOut} disableRipple>
          Sign Out
        </Button>
      </DialogActions>
    </Dialog>
  );

  let linkNameToAccount;
  let allowedLinks;
  if (role !== "") {
    linkNameToAccount =
      role === "ADMIN" || role === "MAIN_ADMIN"
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
      {
        item: (
          <Button
            key="signout"
            color="info"
            purpose="dropdownBtn"
            onClick={onModalOpen}
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
      {logoutModal}
    </Grid>
  );
}

export default AccountLinks;
