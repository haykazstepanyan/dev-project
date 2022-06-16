import { Container, Box } from "@mui/material";
import Form from "../form/FormControlBlock";
import { loginStyles } from "./styles";

function Logout() {
  const classes = loginStyles();
  return (
    <Container className={classes.container}>
      <Box className={classes.boxContainer}>
        <Container>
          <h2 className={classes.title}>Login</h2>
          <Form
            nameInput="Username or email *"
            passwordInput="Passwords *"
            loginType
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
  );
}

export default Logout;
