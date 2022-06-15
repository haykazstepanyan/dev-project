import PropTypes from "prop-types";
import {
  usePopupState,
  bindHover,
  bindMenu,
} from "material-ui-popup-state/hooks";
import HoverMenu from "material-ui-popup-state/HoverMenu";
import MenuItem from "@mui/material/MenuItem";
import Button from "../button";
import { hoverableDropdownStyles } from "./styles";

function HoverableDropdown({ icon, value, list }) {
  const classes = hoverableDropdownStyles();
  const popupState = usePopupState({
    variant: "popover",
    popupId: "demoMenu",
  });

  const handleDropdownClick = () => {
    popupState.close();
  };

  return (
    <div>
      <Button
        {...bindHover(popupState)}
        endIcon={icon}
        color="info"
        type="dropdownBtn"
        state={popupState.isOpen ? "open" : ""}
        disableRipple
      >
        {value}
      </Button>
      <HoverMenu
        {...bindMenu(popupState)}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        {list.map((item) => (
          <MenuItem
            className={classes.menuItems}
            key={item}
            onClick={handleDropdownClick}
          >
            {item}
          </MenuItem>
        ))}
      </HoverMenu>
    </div>
  );
}

HoverableDropdown.defaultProps = {
  icon: "",
};

HoverableDropdown.propTypes = {
  icon: PropTypes.element,
  value: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  ),
};

export default HoverableDropdown;
