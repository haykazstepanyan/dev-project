import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import Button from "../../components/button/Button";
import { detailsStyles } from "./styles";
import Input from "../../components/input/Input";

function AccountDetails() {
  const [gender, setGender] = useState("female");
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const classes = detailsStyles();

  const handleRadioChange = (_, value) => {
    setGender(value);
  };

  return (
    <Container className={classes.container}>
      <h3 className={classes.detailsTitle}>Account Details</h3>

      <FormControl className={classes.formControl}>
        <p>
          Already have an account <Link to="/login">Log in instead!</Link>
        </p>

        <RadioGroup
          className={classes.radioGroup}
          value={gender}
          name="radio-buttons-group"
          onChange={handleRadioChange}
        >
          <FormControlLabel value="male" control={<Radio />} label="Mr." />
          <FormControlLabel value="female" control={<Radio />} label="Mrs." />
        </RadioGroup>
        <div className={classes.inputsContainer}>
          <div className={classes.inputContainer}>
            <Input
              type="text"
              size="large"
              borders="square"
              state="noFocus"
              htmlFor="firstName"
              labelValue="First Name"
            />
          </div>
          <div className={classes.inputContainer}>
            <Input
              type="text"
              size="large"
              borders="square"
              state="noFocus"
              htmlFor="lastName"
              labelValue="Last Name"
            />
          </div>
          <div className={classes.inputContainer}>
            <Input
              type="email"
              size="large"
              borders="square"
              state="noFocus"
              htmlFor="email"
              labelValue="Email"
            />
          </div>
          <div className={classes.inputContainer}>
            <Input
              type="text"
              size="large"
              borders="square"
              state="noFocus"
              htmlFor="password"
              labelValue="Password"
            />
          </div>
        </div>
        <div className={classes.saveBtnContainer}>
          <Button color="primary">Save</Button>
        </div>
      </FormControl>
    </Container>
  );
}

export default AccountDetails;
