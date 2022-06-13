import React from "react";
import { useToggle } from "../../components/hooks/hooks";
import Grid from "@mui/material/Grid";
import MuiDrawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import SearchBox from "./SearchBox";
import NavBar from "./NavBar";
import { iconsStyles, drawerClasses } from "./styles";

const Drawer = () => {
  const [anchor, setAnchor] = useToggle();
  const iconsClasses = iconsStyles();
  const classes = drawerClasses();
  const toggleDrawer = () => {
    setAnchor();
  };
  return (
    <Grid>
      <FormatAlignJustifyIcon
        className={`${iconsClasses.icons} ${iconsClasses.formatAlignIcon}`}
        onClick={toggleDrawer}
      />
      <MuiDrawer
        className={classes.headerDrawer}
        anchor={"left"}
        open={anchor}
        onClose={toggleDrawer}
      >
        <div className={classes.welcomeText}>
          <p>Free Delivery: Take advantage of our time to save event</p>
        </div>
        <SearchBox distance={1} />
        <NavBar />
        <CloseIcon className={classes.closeIcon} onClick={toggleDrawer} />
      </MuiDrawer>
    </Grid>
  );
};

export default Drawer;
