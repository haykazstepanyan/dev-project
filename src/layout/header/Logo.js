import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { logoStyles } from "./styles";

function Logo() {
  const classes = logoStyles();
  return (
    <Grid item md={2}>
      <Link to="/">
        <img className={classes.pageLogo} src={logo} alt="Logo" />
      </Link>
    </Grid>
  );
}

export default Logo;
