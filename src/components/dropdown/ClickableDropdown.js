import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const ClickableDropdown = props => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { icon, options, value, change } = props;

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = selectedOption => {
    setAnchorEl(null);
    change && change(selectedOption);
  };
  const styles = {
    text: {
      color: "#222",
      fontSize: 14,
      textTransform: "Capitalize",
    },
    button: {
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        startIcon={icon || null}
        sx={{ ...styles.button, ...styles.text }}
      >
        {value}
      </Button>
      <Menu
        id="demo-positioned-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ marginTop: "10px" }}
      >
        {options.map((option, i) => (
          <MenuItem
            key={`${option}${i}`}
            onClick={() => handleClose(option)}
            sx={styles.text}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default ClickableDropdown;
