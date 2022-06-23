import { createUseStyles } from "react-jss";
import FooterTop from "./FooterTop";
// import FooterBottom from "./FooterBottom";
import styles from "./styles";

const useStyles = createUseStyles(styles);

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <FooterTop />
      {/* <FooterBottom /> */}
    </div>
  );
}

export default Footer;
