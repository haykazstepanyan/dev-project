import { useState } from "react";
import PropTypes from "prop-types";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { createUseStyles } from "react-jss";
import Button from "../button";

const useStyles = createUseStyles({
  dropdownMenu: ({ topDistance = 0 }) => ({
    "& .MuiPaper-root": {
      marginTop: topDistance,
      minWidth: 200,
    },
  }),
});

function ClickableDropdown({ icon, options, value, change, topDistance }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (selectedOption) => {
    setAnchorEl(null);
    return change && change(selectedOption);
  };

  const classes = useStyles({ topDistance });

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        startIcon={icon}
        type="dropdownBtn"
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
        {options.map((option) => (
          <MenuItem
            className={classes.dropdownMenuItems}
            key={option}
            onClick={() => handleClose(option)}
          >
            {option}
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
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
  topDistance: PropTypes.number,
};

export default ClickableDropdown;
