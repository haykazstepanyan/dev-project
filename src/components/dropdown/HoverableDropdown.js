import React from "react";
import {
  usePopupState,
  bindHover,
  bindMenu,
} from "material-ui-popup-state/hooks";
import Button from "../button";
import HoverMenu from "material-ui-popup-state/HoverMenu";
import MenuItem from "@mui/material/MenuItem";
import { hoverableDropdownStyles } from "./styles";

const HoverableDropdown = ({ icon, value, list }) => {
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
        endIcon={icon || null}
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
        {list.map((item, i) => (
          <MenuItem
            className={classes.menuItems}
            key={`${item}${i}`}
            onClick={handleDropdownClick}
          >
            {item}
          </MenuItem>
        ))}
      </HoverMenu>
    </div>
  );
};

export default HoverableDropdown;
