import PropTypes from "prop-types";
import MuiTextField from "@mui/material/TextField";
import { ThemeProvider } from "@mui/material/styles";
import { FormControl, InputLabel } from "@mui/material";
import { theme, globalInputStyles } from "./theme";

function Input({
  size,
  labelValue,
  borders,
  htmlFor,
  state,
  placeholder,
  ...otherProps
}) {
  const inputClasses = globalInputStyles();
  return (
    <ThemeProvider theme={theme}>
      <FormControl variant="standard" className={inputClasses.w100}>
        <InputLabel className={inputClasses.inputLabelStyle} htmlFor={htmlFor}>
          {labelValue}
        </InputLabel>
        <MuiTextField
          id={htmlFor}
          placeholder={placeholder}
          size={size}
          borders={borders}
          state={state}
          {...otherProps}
        />
      </FormControl>
    </ThemeProvider>
  );
}

Input.propTypes = {
  size: PropTypes.string,
  labelValue: PropTypes.string,
  htmlFor: PropTypes.string,
  borders: PropTypes.string,
  state: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
