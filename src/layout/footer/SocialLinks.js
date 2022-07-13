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
    {
      icon: <FacebookOutlinedIcon />,
      key: "facebook",
      link: "https://www.facebook.com/",
    },
    {
      icon: <TwitterIcon />,
      key: "twitter",
      link: "https://twitter.com/?lang=en",
    },
    {
      icon: <GoogleIcon />,
      key: "google",
      link: "https://mail.google.com/mail/u/0/#inbox",
    },
    {
      icon: <YouTubeIcon />,
      key: "youtube",
      link: "https://www.youtube.com/",
    },
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
          {links.map(({ icon, key, link }) => (
            <li key={key}>
              <a href={link} target="_blank" rel="noreferrer">
                <span className={classes.socialLinks}>{icon}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ContactLinks;
