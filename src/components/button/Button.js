import PropTypes from "prop-types";
import MuiButton from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

function Button({
  children,
  color,
  size,
  borders,
  purpose,
  state,
  ...otherProps
}) {
  return (
    <ThemeProvider theme={theme}>
      <MuiButton
        color={color}
        size={size}
        borders={borders}
        purpose={purpose}
        state={state}
        {...otherProps}
      >
        {children}
      </MuiButton>
    </ThemeProvider>
  );
}

Button.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  borders: PropTypes.string,
  purpose: PropTypes.string,
  state: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

export default Button;
