import React from "react";
import Button from "@mui/material/Button";
import { theme } from "./styles";
import { ThemeProvider } from "@mui/material/styles";

const CustomButton = ({
  children,
  color,
  size,
  borders,
  type,
  ...otherProps
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Button
        color={color}
        size={size}
        borders={borders}
        type={type}
        {...otherProps}
      >
        {children}
      </Button>
    </ThemeProvider>
  );
};

export default CustomButton;
