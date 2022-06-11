import React from "react";
import { useState } from "react";
import Button from "../button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  dropdownMenu: ({ topDistance = 0 }) => ({
    "& .MuiPaper-root": {
      marginTop: topDistance,
      minWidth: 200,
    },
  }),
});

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

  const classes = useStyles({ topDistance });

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
        className={classes.dropdownMenu}
        // sx={{ marginTop: topDistance }}
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
