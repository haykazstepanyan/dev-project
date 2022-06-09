import React from "react";
import Button from "@mui/material/Button";
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
      <Button
        color={color}
        size={size}
        borders={borders}
        type={type}
        sx={{ borderRadius: borderRadius }}
        {...otherProps}
      >
        {children}
      </Button>
    </ThemeProvider>
  );
};

export default CustomButton;
