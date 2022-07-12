import { Grid } from "@mui/material";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import SearchBox from "./SearchBox";
import Navbar from "./Navbar";
import Drawer from "../../components/drawer";
import { drawerStyles } from "./styles";
import useToggle from "../../hooks/useToggle";

function HeaderMobileDrawer() {
  const [anchor, setAnchor] = useToggle();
  const classes = drawerStyles();

  const toggleDrawer = () => {
    setAnchor();
  };
  return (
    <Grid>
      <Drawer
        open={anchor}
        toggleDrawer={toggleDrawer}
        anchorDirection="left"
        OpenIcon={FormatAlignJustifyIcon}
        outline
      >
        <div className={classes.welcomeText}>
          <p>Free Delivery: Take advantage of our time to save event</p>
        </div>
        <SearchBox toggleDrawer={toggleDrawer} distance={1} />
        <Navbar toggleDrawer={toggleDrawer} />
      </Drawer>
    </Grid>
  );
}

export default HeaderMobileDrawer;
