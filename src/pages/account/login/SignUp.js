import { FormControl, FormGroup } from "@mui/material";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import signUpInStyles from "./styles";

export default function SignUp() {
  const classes = signUpInStyles();
  return (
    <FormControl className={classes.formStyle}>
      <div>
        <Input
          borders="square"
          state="noFocus"
          htmlFor="registerName"
          name="email"
          type="email"
          labelValue="Email address *"
          size="large"
          className={classes.mb10}
        />
      </div>

      <div>
        <Input
          borders="square"
          state="noFocus"
          htmlFor="registerPassword"
          name="password"
          type="password"
          labelValue="Passwords *"
          size="large"
          className={classes.mb10}
        />
      </div>
      <FormGroup>
        <div className={classes.btnContainer}>
          <Button
            className={classes.btnStyle}
            color="primary"
            borders="rounded"
            size="small"
          >
            Register
          </Button>
        </div>
      </FormGroup>
    </FormControl>
  );
}
