import FooterTop from "./FooterTop";
import footerStyles from "./styles";

function Footer() {
  const classes = footerStyles();
  return (
    <div className={classes.footer}>
      <FooterTop />
    </div>
  );
}

export default Footer;
