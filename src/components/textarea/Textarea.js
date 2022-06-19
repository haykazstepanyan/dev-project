import PropTypes from "prop-types";
import { FormControl, InputLabel, TextareaAutosize } from "@mui/material";
import { globalTextAreaStyles } from "./styles";

function Textarea({ labelValue, htmlFor, state, placeholder, ...otherProps }) {
  const textareaClasses = globalTextAreaStyles();
  return (
    <FormControl variant="standard" className={textareaClasses.w100}>
      <InputLabel
        className={textareaClasses.textareaLabelStyle}
        htmlFor={htmlFor}
      >
        {labelValue}
      </InputLabel>
      <TextareaAutosize
        id={htmlFor}
        placeholder={placeholder}
        state={state}
        className={textareaClasses.textareaStyle}
        {...otherProps}
      />
    </FormControl>
  );
}

Textarea.propTypes = {
  labelValue: PropTypes.string,
  htmlFor: PropTypes.string,
  state: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Textarea;
