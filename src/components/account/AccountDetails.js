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
import { detailsStyles } from "./styles";
import Button from "../button";

const labelNames = [
  "First Name",
  "Last Name",
  "Email",
  "Password",
  "Birthdate",
];

function AccountDetails() {
  const classes = detailsStyles();
  return (
    <Container className={classes.container}>
      <h3 className={classes.detailsTitle}>Account Details</h3>

      <FormControl className={classes.formControl}>
        <p>
          Already have an account <Link to="/login">Log in instead!</Link>
        </p>

        <RadioGroup
          className={classes.radioGroup}
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Mr." />
          <FormControlLabel value="male" control={<Radio />} label="Mrs." />
        </RadioGroup>
        <div className={classes.inputsContainer}>
          {labelNames.map((item) => {
            const id = item.toLowerCase().replace(/\s/g, "");
            const value = id === "birthdate" ? "MM/DD/YYY" : "";

            return (
              <div className={classes.inputContainer} key={item}>
                <FormLabel htmlFor={id}>{item}</FormLabel>
                <TextField
                  className={classes.formInput}
                  id={id}
                  name="name"
                  type="text"
                  value={value}
                />
              </div>
            );
          })}
        </div>
        <span>(E.g.: 05/31/1970)</span>
        <div className={classes.saveBtnContainer}>
          <Button className={classes.saveBtn} variant="text">
            Save
          </Button>
        </div>
      </FormControl>
    </Container>
  );
}

export default AccountDetails;
