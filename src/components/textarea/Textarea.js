import PropTypes from "prop-types";
import { FormControl, InputLabel } from "@mui/material";
import { globalTextAreaStyles } from "./styles";

function Textarea({ labelValue, htmlFor, placeholder, ...otherProps }) {
  const textareaClasses = globalTextAreaStyles();
  return (
    <FormControl variant="standard" className={textareaClasses.w100}>
      <InputLabel
        className={textareaClasses.textareaLabelStyle}
        htmlFor={htmlFor}
      >
        {labelValue}
      </InputLabel>
      <textarea
        id={htmlFor}
        placeholder={placeholder}
        className={textareaClasses.textareaStyle}
        {...otherProps}
      />
    </FormControl>
  );
}

Textarea.propTypes = {
  labelValue: PropTypes.string,
  htmlFor: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Textarea;
