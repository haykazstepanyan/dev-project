import * as React from "react";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import styles from "./styles";
import TwitterIcon from "@mui/icons-material/Twitter";
import clsx from "clsx";
import GoogleIcon from '@mui/icons-material/Google';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

const useStyles = createUseStyles(styles);

const ContactLinks = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.ContactLinksHeader}>
        <Link to="/" className={classes.ContactLinksHeaderClik}>
          <img
            src="https://htmldemo.net/lukani/lukani/assets/img/logo/logo.png"
            className={classes.ContactLinksImg}
          ></img>
        </Link>
      </div>
      <div className={classes.socialBtnList}>
        <ul className={clsx(classes.contactPagesDiv, classes.infoUl)}>
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
};

export default ContactLinks;
