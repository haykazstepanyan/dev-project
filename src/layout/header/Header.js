import React from "react";
import HeaderTop from "./HeaderTop";
import HeaderMiddle from "./HeaderMiddle";
import HeaderBottom from "./HeaderBottom";
import { headerStyles } from "./styles";

const Header = () => {
  const classes = headerStyles();
  return (
    <header className={classes.header}>
      <HeaderTop />
      <HeaderMiddle />
      <HeaderBottom />
    </header>
  );
};

export default Header;
