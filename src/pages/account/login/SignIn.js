import { useState } from "react";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import signUpInStyles from "./styles";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = signUpInStyles();

  const handleSignInSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={classes.formStyle} onSubmit={handleSignInSubmit}>
      <div>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          borders="square"
          state="noFocus"
          htmlFor="registerName"
          name="email"
          type="email"
          labelValue="Username or email *"
          size="large"
          className={classes.mb10}
        />
      </div>
      <div>
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          borders="square"
          state="noFocus"
          htmlFor="registerSignInPassword"
          name="password"
          type="password"
          labelValue="Passwords *"
          size="large"
          autoComplete="current-password"
          className={classes.mb10}
        />
      </div>
      {/* <FormGroup> */}
      <div className={classes.btnContainer}>
        <Button
          className={classes.btnStyle}
          type="submit"
          color="primary"
          borders="rounded"
          size="small"
        >
          Login
        </Button>
      </div>
    </form>
  );
}

export default SignIn;
