import { Grid, Drawer as MuiDrawer } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import { useToggle } from "../../hooks/hooks";
import SearchBox from "./SearchBox";
import Navbar from "./Navbar";
import { iconsStyles, drawerClasses } from "./styles";

function Drawer() {
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
        anchor="left"
        open={anchor}
        onClose={toggleDrawer}
      >
        <div className={classes.welcomeText}>
          <p>Free Delivery: Take advantage of our time to save event</p>
        </div>
        <SearchBox distance={1} />
        <Navbar />
        <CloseIcon className={classes.closeIcon} onClick={toggleDrawer} />
      </MuiDrawer>
    </Grid>
  );
}

export default Drawer;
