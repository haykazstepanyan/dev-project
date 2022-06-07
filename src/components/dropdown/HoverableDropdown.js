import React from "react";
import {
  usePopupState,
  bindHover,
  bindMenu,
} from "material-ui-popup-state/hooks";
import Button from "../button";
import HoverMenu from "material-ui-popup-state/HoverMenu";
import MenuItem from "@mui/material/MenuItem";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const HoverableDropdown = ({ icon, value, change, list }) => {
  const popupState = usePopupState({
    variant: "popover",
    popupId: "demoMenu",
  });
  const theme = createTheme({
    palette: {
      primary: {
        main: popupState.isOpen ? "#198754" : "#222",
      },
    },
  });
  const handleDropdownClick = (item) => {
    popupState.close();
    if (change) change(item);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button
          {...bindHover(popupState)}
          endIcon={icon || null}
          color="info"
          type="dropdownBtn"
        >
          {value}
        </Button>
      </ThemeProvider>
      <HoverMenu
        {...bindMenu(popupState)}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        {list.map((item, i) => (
          <MenuItem
            key={`${item}${i}`}
            onClick={() => handleDropdownClick(item)}
          >
            {item}
          </MenuItem>
        ))}
      </HoverMenu>
    </div>
  );
};

export default HoverableDropdown;
