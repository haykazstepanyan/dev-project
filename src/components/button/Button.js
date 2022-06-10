import React from "react";
import MuiButton from "@mui/material/Button";
import { theme } from "./theme";
import { ThemeProvider } from "@mui/material/styles";

const CustomButton = ({
  children,
  color,
  size,
  borders,
  type,
  borderRadius,
  ...otherProps
}) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiButton
        color={color}
        size={size}
        borders={borders}
        type={type}
        sx={{ borderRadius: borderRadius }}
        {...otherProps}
      >
        {children}
      </MuiButton>
    </ThemeProvider>
  );
};

export default Button;
