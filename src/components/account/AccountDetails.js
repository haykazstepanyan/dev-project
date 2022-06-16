import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  FormControl,
  FormLabel,
  TextField,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import Button from "../button";
import { detailsStyles } from "./styles";

function AccountDetails() {
  const [gender, setGender] = useState("female");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
            <FormLabel htmlFor="firstName">First Name</FormLabel>
            <TextField
              className={classes.formInput}
              id="firstName"
              name="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className={classes.inputContainer}>
            <FormLabel htmlFor="lastName">Last Name</FormLabel>
            <TextField
              className={classes.formInput}
              id="lastName"
              name="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className={classes.inputContainer}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <TextField
              className={classes.formInput}
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={classes.inputContainer}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <TextField
              className={classes.formInput}
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* Date picker */}
        </div>
        <div className={classes.saveBtnContainer}>
          <Button color="primary">Save</Button>
        </div>
      </FormControl>
    </Container>
  );
}

export default AccountDetails;
