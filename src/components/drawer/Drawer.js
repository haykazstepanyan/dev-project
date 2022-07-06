import PropTypes from "prop-types";
import MuiDrawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import drawerStyles from "./styles";

function Drawer({
  children,
  anchorDirection,
  OpenIcon,
  outline,
  open,
  toggleDrawer,
}) {
  const classes = drawerStyles();

  return (
    <>
      <OpenIcon
        className={`${classes.icons} ${outline ? classes.outline : ""}`}
        onClick={toggleDrawer}
      />
      <MuiDrawer
        className={classes.headerDrawer}
        anchor={anchorDirection}
        open={open}
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
  open: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};

export default Drawer;
