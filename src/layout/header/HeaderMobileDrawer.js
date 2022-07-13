import { Grid } from "@mui/material";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import SearchBox from "./SearchBox";
import Navbar from "./Navbar";
import Drawer from "../../components/drawer";
import useToggle from "../../hooks/useToggle";

function HeaderMobileDrawer() {
  const [anchor, setAnchor] = useToggle();

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
        <div>
          <SearchBox toggleDrawer={toggleDrawer} distance={1} />
          <Navbar toggleDrawer={toggleDrawer} />
        </div>
      </Drawer>
    </Grid>
  );
}

export default HeaderMobileDrawer;
