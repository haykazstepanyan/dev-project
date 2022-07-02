import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import logo from "../../assets/images/logo.jpg";
import styles from "./styles";

const useStyles = createUseStyles(styles);

function ContactLinks() {
  const classes = useStyles();

  return (
    <div className={classes.contactContainer}>
      <div className={classes.contactLinksHeader}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className={classes.socialBtnList}>
        <ul>
          <li>
            <Link to="/">
              <FacebookOutlinedIcon />
            </Link>
          </li>
          <li>
            <Link to="/">
              <TwitterIcon />
            </Link>
          </li>
          <li>
            <Link to="/">
              <GoogleIcon />
            </Link>
          </li>
          <li>
            <Link to="/">
              <YouTubeIcon />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ContactLinks;
