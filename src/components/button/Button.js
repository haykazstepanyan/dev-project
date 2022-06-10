import React from "react";
import MuiButton from "@mui/material/Button";
import { theme } from "./theme";
import { ThemeProvider } from "@mui/material/styles";

const Button = ({ children, color, size, borders, type, ...otherProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiButton
        color={color}
        size={size}
        borders={borders}
        type={type}
        onClick={() => alert()}
        {...otherProps}
      >
        {children}
      </MuiButton>
    </ThemeProvider>
  );
};

export default Button;
