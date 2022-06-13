import React from "react";
import Layout from "../../layout/Layout";
import Banner from "../common/Banner";
import FormControlLabel from "@mui/material/FormControlLabel";
import {
  Container,
  Box,
  FormControl,
  FormLabel,
  TextField,
} from "@mui/material";
import Form from "../form/FormControlBlock";
import { loginStyles } from "./styles";

const Logout = (props) => {
  const classes = loginStyles();
  return (
    <Layout>
      <Banner name="My Account" />
      <Container className={classes.container}>
        <Box className={classes.boxContainer}>
          <Container>
            <h2 className={classes.title}>Login</h2>
            <Form
              nameInput="Username or email *"
              passwordInput="Passwords *"
              loginType={true}
            />
          </Container>
          <Container>
            <h2 className={classes.title}>Register</h2>
            <Form
              nameInput="Email address *"
              passwordInput="Passwords *"
              loginType={false}
            />
          </Container>
        </Box>
      </Container>
    </Layout>
  );
};

export default Logout;
