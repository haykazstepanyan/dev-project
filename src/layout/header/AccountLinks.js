import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { HoverableDropdown } from "../../components/dropdown";
import { iconsStyles } from "./styles";

const AccountLinks = () => {
  const classes = iconsStyles();
  const accountData = [
    <Link to="/account">My account</Link>,
    "Shopping cart",
    "Wishlist",
  ];
  return (
    <Grid item md={2} className={classes.iconsContainer}>
      <HoverableDropdown value={<PeopleOutlineIcon />} list={accountData} />
      <Link to="/wishlist">
        <FavoriteBorderIcon className={classes.icons} />
      </Link>
      <Link to="/cart">
        <WorkOutlineIcon className={classes.icons} />
      </Link>
    </Grid>
  );
};

export default AccountLinks;
