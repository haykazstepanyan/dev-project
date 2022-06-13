import React from "react";
import Grid from "@mui/material/Grid";
import logo from "../../assets/images/logo.png";
import { logoStyles } from "./styles";

const Logo = () => {
  const classes = logoStyles();
  return (
    <Grid item md={2}>
      <img className={classes.pageLogo} src={logo} alt="Logo" />
    </Grid>
  );
};

export default Logo;
