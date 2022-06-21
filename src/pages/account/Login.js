import { Grid, Container } from "@mui/material";
import Banner from "../../components/common/Banner";
import SignUp from "./login/SignUp";
import SignIn from "./login/SignIn";
import { loginStyles } from "./styles";

function Login() {
  const classes = loginStyles();
  return (
    <>
      <Banner name="Login / Register" />

      <Container className={classes.containerStyle}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={6} md={6} sm={12}>
            <div style={{ width: "100%" }}>
              <h2 className={classes.title}>Login</h2>
              <SignIn />
            </div>
          </Grid>
          <Grid item xs={12} lg={6} md={6} sm={12}>
            <h2 className={classes.title}>Register</h2>
            <SignUp />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Login;
