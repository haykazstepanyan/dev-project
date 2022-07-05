import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import { Container, FormControlLabel, RadioGroup, Radio } from "@mui/material";
import TextField from "@mui/material/TextField";
import { updateUsersDashboard } from "../../redux/users/actions";
import Button from "../../components/button/Button";
import { detailsStyles } from "./styles";

function AccountDetails() {
  const [gender, setGender] = useState("female");
  const userData = useSelector((state) => state.auth.userData);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [newPassword, setNewPassword] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();

  const classes = detailsStyles();

  const handleRadioChange = (_, value) => {
    setGender(value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const data = {
      id: userData.id,
      firstName,
      lastName,
      email,
      gender,
      newPassword,
      password,
    };
    dispatch(updateUsersDashboard(data));
  };

  return (
    <Container className={classes.container}>
      <h3 className={classes.detailsTitle}>Account Details</h3>

      <form onSubmit={handleClick} className={classes.formControl}>
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
            <TextField
              id="outlined-basic"
              variant="outlined"
              label="First Name"
              placeholder={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className={classes.inputContainer}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              label="Last Name"
              placeholder={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className={classes.inputContainer}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              label="Email"
              placeholder={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={classes.inputContainer}>
            <TextField
              id="outlined-password-input"
              label="New Password"
              type="password"
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className={classes.inputContainer}>
            <TextField
              id="outlined-password-input"
              label="Confirm Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className={classes.saveBtnContainer}>
          <Button color="primary" borders="rounded" size="small" type="submit">
            Save
          </Button>
        </div>
      </form>
    </Container>
  );
}

export default AccountDetails;
