import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Grid, Container } from "@mui/material";
import { signIn } from "../redux/auth/actions";
import Input from "../components/input/Input";
import Button from "../components/button/Button";
import Banner from "../components/common/Banner";
import { signUpInStyles } from "./styles";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const classes = signUpInStyles();

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };

    dispatch(signIn(data));
  };

  return (
    <>
      <Banner name="Sign In" />
      <Container className={classes.containerStyle}>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          className={classes.formContainer}
        >
          <form className={classes.formStyle} onSubmit={handleSignInSubmit}>
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
              <Link to="/signup" className={classes.authLink}>
                Click here to Sign Up
              </Link>
              <Button
                type="submit"
                color="primary"
                borders="rounded"
                size="small"
              >
                Sign In
              </Button>
            </div>
          </form>
        </Grid>
      </Container>
    </>
  );
}

export default SignIn;