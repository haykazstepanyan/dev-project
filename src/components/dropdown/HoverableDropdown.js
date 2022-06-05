import {
  usePopupState,
  bindHover,
  bindMenu,
} from "material-ui-popup-state/hooks";
import Button from "@mui/material/Button";
import HoverMenu from "material-ui-popup-state/HoverMenu";
import MenuItem from "@mui/material/MenuItem";
import { hoverableStyles } from "./style";
import { createUseStyles } from "react-jss";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const useStyles = createUseStyles(hoverableStyles);

const HoverableDropdown = (props) => {
  const { icon, value, change, list } = props;
  const classes = useStyles();
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

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button
          {...bindHover(popupState)}
          endIcon={icon || null}
          className={classes.btn}
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
            className={classes.textColor}
            key={`${item}${i}`}
            onClick={change && (() => change(item))}
          >
            {item}
          </MenuItem>
        ))}
      </HoverMenu>
    </div>
  );
};

export default HoverableDropdown;
