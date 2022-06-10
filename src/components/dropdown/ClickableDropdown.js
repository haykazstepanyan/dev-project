import React from "react";
import { useState } from "react";
import Button from "../button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const ClickableDropdown = ({ icon, options, value, change, topDistance }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (selectedOption) => {
    setAnchorEl(null);
    change && change(selectedOption);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        startIcon={icon || null}
        type="dropdownBtn"
        color="info"
        disableRipple
      >
        {value}
      </Button>
      <Menu
        id="demo-positioned-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ marginTop: topDistance }}
      >
        {options.map((option, i) => (
          <MenuItem key={`${option}${i}`} onClick={() => handleClose(option)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default ClickableDropdown;
