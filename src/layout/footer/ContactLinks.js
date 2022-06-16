import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import logo from "../../assets/images/logo.png";
import styles from "./styles";

const useStyles = createUseStyles(styles);

function ContactLinks() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.ContactLinksHeader}>
        <Link to="/" className={classes.ContactLinksHeaderClik}>
          <img src={logo} alt="logo" className={classes.ContactLinksImg} />
        </Link>
      </div>
      <div className={classes.socialBtnList}>
        <ul className={`${classes.contactPagesDiv} ${classes.infoUl}`}>
          <li className={classes.socialBtnLine}>
            <Link to="/" className={classes.socialBtn}>
              <FacebookOutlinedIcon className={classes.iconSize} />
            </Link>
          </li>
          <li className={classes.socialBtnLine}>
            <Link to="/" className={classes.socialBtn}>
              <TwitterIcon className={classes.iconSize} />
            </Link>
          </li>
          <li className={classes.socialBtnLine}>
            <Link to="/" className={classes.socialBtn}>
              <GoogleIcon className={classes.iconSize} />
            </Link>
          </li>
          <li className={classes.socialBtnLine}>
            <Link to="/" className={classes.socialBtn}>
              <YouTubeIcon className={classes.iconSize} />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ContactLinks;
