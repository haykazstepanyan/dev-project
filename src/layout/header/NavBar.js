import { NavLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { NAV_LINKS } from "../../constants/constants";
import { navbarStyles } from "./styles";

function NavBar() {
  const classes = navbarStyles();
  return (
    <Grid item md={9}>
      <nav className={classes.nav}>
        <ul className={classes.navList}>
          {NAV_LINKS.map(({ route, name }) => (
            <li className={classes.navListItems} key={name}>
              <NavLink
                to={route}
                className={(data) =>
                  `${data.isActive ? classes.activeLink : ""} ${
                    classes.navLinks
                  }`
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </Grid>
  );
}

export default NavBar;
