import React from "react";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";
import { createUseStyles } from "react-jss";
import styles from "./styles";

const useStyles = createUseStyles(styles);

const Footer = () => {
  const classes = useStyles()
  return (
    <div className={classes.footer}>
      <FooterTop />
      <FooterBottom />
    </div>
  );
};


export default Footer;
