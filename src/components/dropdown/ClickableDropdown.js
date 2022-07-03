import { useState } from "react";
import PropTypes from "prop-types";
import { Menu, MenuItem } from "@mui/material";
import Button from "../button";
import { clickableDropdownStyles } from "./styles";

function ClickableDropdown({ icon, options, value, change, topDistance }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = clickableDropdownStyles({ topDistance });
  const open = !!anchorEl;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSelectChange = (id, name) => {
    setAnchorEl(null);
    return change && change(id, name);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        startIcon={icon}
        purpose="dropdownBtn"
        state={open ? "open" : ""}
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
      >
        {options.map(({ item, name, id }) => (
          <MenuItem
            className={classes.dropdownMenuItems}
            key={id}
            onClick={() => handleSelectChange(id, name)}
          >
            {item || name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

ClickableDropdown.defaultProps = {
  icon: "",
  topDistance: 0,
};

ClickableDropdown.propTypes = {
  icon: PropTypes.element,

  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.object,
    ]),
  ).isRequired,
  value: PropTypes.string.isRequired,
  change: PropTypes.func,
  topDistance: PropTypes.number,
};

export default ClickableDropdown;
