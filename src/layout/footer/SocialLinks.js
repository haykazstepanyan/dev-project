import { Link } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import logo from "../../assets/images/logo.jpg";
import footerStyles from "./styles";

function ContactLinks() {
  const classes = footerStyles();
  const links = [
    { icon: <FacebookOutlinedIcon />, key: "facebook" },
    { icon: <TwitterIcon />, key: "twitter" },
    { icon: <GoogleIcon />, key: "google" },
    { icon: <YouTubeIcon />, key: "youtube" },
  ];

  return (
    <div className={classes.contactContainer}>
      <div className={classes.contactLinksHeader}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className={classes.socialBtnList}>
        <ul>
          {links.map(({ icon, key }) => (
            <li key={key}>
              <span className={classes.socialLinks}>{icon}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ContactLinks;
