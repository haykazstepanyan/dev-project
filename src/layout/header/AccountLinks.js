import { Link } from "react-router-dom";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { HoverableDropdown } from "../../components/dropdown";
import { iconsStyles } from "./styles";
import MiniShoppingCart from "../../components/miniShoppingCart";

function AccountLinks() {
  const [openMiniShoppingCart, setOpenMiniShoppingCart] = useState(false);
  const onClose = () => {
    setOpenMiniShoppingCart(!openMiniShoppingCart);
  };

  const classes = iconsStyles();
  const accountData = [
    <Link key="account" to="/account">
      My account
    </Link>,
    "Shopping cart",
    "Wishlist",
  ];
  return (
    <Grid item md={2} className={classes.iconsContainer}>
      <HoverableDropdown value={<PeopleOutlineIcon />} list={accountData} />
      <Link to="/wishlist">
        <FavoriteBorderIcon className={classes.icons} />
      </Link>
      <WorkOutlineIcon
        className={classes.icons}
        onClick={() => {
          setOpenMiniShoppingCart(true);
        }}
      />
      {openMiniShoppingCart && (
        <MiniShoppingCart open={openMiniShoppingCart} onClose={onClose} />
      )}
    </Grid>
  );
}

export default AccountLinks;
