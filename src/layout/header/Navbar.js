import { NavLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { navbarStyles } from "./styles";

function NavBar() {
  const classes = navbarStyles();
  return (
    <Grid item md={9}>
      <nav className={classes.nav}>
        <ul className={classes.navList}>
          <li className={classes.navListItems}>
            <NavLink
              to="/"
              className={(data) =>
                `${data.isActive ? classes.activeLink : ""} ${classes.navLinks}`
              }
            >
              Home
            </NavLink>
          </li>
          <li className={classes.navListItems}>
            <NavLink
              to="/shop"
              className={(data) =>
                `${data.isActive ? classes.activeLink : ""} ${classes.navLinks}`
              }
            >
              Shop
            </NavLink>
          </li>
          <li className={classes.navListItems}>
            <NavLink
              to="/contact"
              className={(data) =>
                `${data.isActive ? classes.activeLink : ""} ${classes.navLinks}`
              }
            >
              Contact us
            </NavLink>
          </li>
          <li className={classes.navListItems}>
            <NavLink
              to="/about"
              className={(data) =>
                `${data.isActive ? classes.activeLink : ""} ${classes.navLinks}`
              }
            >
              About us
            </NavLink>
          </li>
        </ul>
      </nav>
    </Grid>
  );
}

export default NavBar;
