import { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../../../redux/auth/actions";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import signUpInStyles from "./styles";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = signUpInStyles();

  const dispatch = useDispatch();

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
      firstName,
      lastName,
    };
    dispatch(signUp(data));
  };

  return (
    <form onSubmit={handleSignUpSubmit} className={classes.formStyle}>
      <div>
        <Input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          borders="square"
          state="noFocus"
          htmlFor="registerFirstName"
          name="firstName"
          type="text"
          labelValue="First name *"
          size="large"
          className={classes.mb10}
        />
      </div>
      <div>
        <Input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          borders="square"
          state="noFocus"
          htmlFor="registerLastName"
          name="lastName"
          type="text"
          labelValue="Last name *"
          size="large"
          className={classes.mb10}
        />
      </div>
      <div>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          borders="square"
          state="noFocus"
          htmlFor="registerEmail"
          name="email"
          type="email"
          labelValue="Email address *"
          size="large"
          required
          className={classes.mb10}
        />
      </div>

      <div>
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          borders="square"
          state="noFocus"
          htmlFor="registerSignUpPassword"
          name="password"
          type="password"
          labelValue="Passwords *"
          size="large"
          autoComplete="current-password"
          className={classes.mb10}
        />
      </div>
      <div className={classes.btnContainer}>
        <Button
          className={classes.btnStyle}
          color="primary"
          borders="rounded"
          size="small"
          type="submit"
        >
          Register
        </Button>
      </div>
    </form>
  );
}

export default SignUp;
