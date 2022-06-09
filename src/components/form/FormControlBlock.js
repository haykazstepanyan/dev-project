import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Box,
  FormControl,
  FormLabel,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import Button from "../button/Button";
import { formStyles } from "../styles/styles";

const Form = ({ nameInput, passwordInput, loginType }) => {
  const classes = formStyles();
  return (
    <Fragment>
      <FormControl
        style={{
          width: "100%",
          border: "1px solid #e1e1e1",
          padding: "23px 20px 29px",
        }}
        className={classes.accountForm}
      >
        <div className={classes.inputContainer}>
          <FormLabel htmlFor="name-input">{nameInput}</FormLabel>
          <TextField
            className={classes.formInput}
            id="name-input"
            name="name"
            type="text"
          />
        </div>

        <div className={classes.inputContainer}>
          <FormLabel htmlFor="password-input">{passwordInput}</FormLabel>
          <TextField
            className={classes.formInput}
            id="password-input"
            name="name"
            type="text"
          />
        </div>
        {loginType ? (
          <Container className={classes.loginSumbit}>
            <Link to="#" className={classes.lostPasswordLink}>
              Lost your password?
            </Link>
            <div>
              <FormGroup className={classes.btnCnt}>
                <FormControlLabel
                  className={classes.label}
                  control={
                    <Checkbox
                      defaultChecked
                      style={{ color: "blue", height: "10px", width: "10px" }}
                    />
                  }
                  label="Remember me"
                />
                <Button children="Login" type="sumbit" borderRadius="20px" />
              </FormGroup>
            </div>
          </Container>
        ) : (
          <FormGroup className={classes.btnCnt}>
            <Button children="Register" type="sumbit" borderRadius="20px" />
          </FormGroup>
        )}
      </FormControl>
    </Fragment>
  );
};
export default Form;
