import { Grid } from "@mui/material";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import SearchBox from "./SearchBox";
import Navbar from "./Navbar";
import Drawer from "../../components/drawer";
import { drawerClasses } from "./styles";

function HeaderMobileDrawer() {
  const classes = drawerClasses();
  return (
    <Grid>
      <Drawer anchorDirection="left" OpenIcon={FormatAlignJustifyIcon} outline>
        <div className={classes.welcomeText}>
          <p>Free Delivery: Take advantage of our time to save event</p>
        </div>
        <SearchBox distance={1} />
        <Navbar />
      </Drawer>
    </Grid>
  );
}

export default HeaderMobileDrawer;
