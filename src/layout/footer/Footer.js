import FooterTop from "./FooterTop";
import footerStyles from "./styles";
// import FooterBottom from "./FooterBottom";

function Footer() {
  const classes = footerStyles();
  return (
    <div className={classes.footer}>
      <FooterTop />
      {/* <FooterBottom /> */}
    </div>
  );
}

export default Footer;
