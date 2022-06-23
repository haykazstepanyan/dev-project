import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Grid, Container } from "@mui/material";
import { signUp } from "../redux/auth/actions";
import Input from "../components/input/Input";
import Button from "../components/button/Button";
import Banner from "../components/common/Banner";
import { signUpInStyles } from "./styles";

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
    <>
      <Banner name="Sign Up" />
      <Container className={classes.containerStyle}>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          className={classes.formContainer}
        >
          <form onSubmit={handleSignUpSubmit} className={classes.formStyle}>
            <div>
              <Input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                borders="square"
                state="noFocus"
                htmlFor="firstName"
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
                htmlFor="lastName"
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
                htmlFor="email"
                name="email"
                type="email"
                labelValue="Email *"
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
                htmlFor="password"
                name="password"
                type="password"
                labelValue="Password *"
                size="large"
                autoComplete="current-password"
                className={classes.mb10}
              />
            </div>
            <div className={classes.btnContainer}>
              <Link to="/signin" className={classes.authLink}>
                Click here to Sign In
              </Link>
              <Button
                color="primary"
                borders="rounded"
                size="small"
                type="submit"
              >
                Sign Up
              </Button>
            </div>
          </form>
        </Grid>
      </Container>
    </>
  );
}

export default SignUp;
