import PropTypes from "prop-types";
import MuiDrawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import useToggle from "../../hooks/useToggle";
import drawerStyles from "./styles";

function Drawer({ children, anchorDirection, OpenIcon, outline }) {
  const [anchor, setAnchor] = useToggle();
  const classes = drawerStyles();

  const toggleDrawer = () => {
    setAnchor();
  };

  return (
    <>
      <OpenIcon
        className={`${classes.icons} ${outline ? classes.outline : ""}`}
        onClick={toggleDrawer}
      />
      <MuiDrawer
        className={classes.headerDrawer}
        anchor={anchorDirection}
        open={anchor}
        onClose={toggleDrawer}
        disableScrollLock
      >
        {children}
        <CloseIcon className={classes.closeIcon} onClick={toggleDrawer} />
      </MuiDrawer>
    </>
  );
}

Drawer.propTypes = {
  anchorDirection: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.objectOf(PropTypes.element),
  ]),
  OpenIcon: PropTypes.elementType,
  outline: PropTypes.bool,
};

export default Drawer;
