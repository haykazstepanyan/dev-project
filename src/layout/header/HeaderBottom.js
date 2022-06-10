import React from "react";
import { ClickableDropdown } from "../../components/dropdown";
import Grid from "@mui/material/Grid";
import Container from "@mui/system/Container";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { bottomPartStyles, commonStyles } from "./styles";
import { Link, NavLink } from "react-router-dom";

const categoriesArray = [
  "All categories",
  "Category 1",
  "Category 2",
  "Category 3 for kids",
  "Category 4",
  "Category 5",
];

const HeaderBottom = () => {
  const classes = bottomPartStyles();
  const headerClasses = commonStyles();
  const categoriesToLink = categoriesArray.map((category) => (
    <Link to="/" className={classes.categoryLinks}>
      {category}
    </Link>
  ));
  return (
    <div className={`${headerClasses.headerParts} ${classes.headerBottom}`}>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item sm={3} className={classes.bottomCategories}>
            <ClickableDropdown
              options={categoriesToLink}
              icon={<FormatListBulletedIcon />}
              value="Categories"
              topDistance="6px"
            />
          </Grid>
          <Grid item sm={9}>
            <nav className={classes.nav}>
              <ul className={classes.navList}>
                <li className={classes.navListItems}>
                  <NavLink
                    to="/"
                    className={(data) =>
                      `${data.isActive ? classes.activeLink : ""} ${
                        classes.navLinks
                      }`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className={classes.navListItems}>
                  <NavLink
                    to="/shop"
                    className={(data) =>
                      `${data.isActive ? classes.activeLink : ""} ${
                        classes.navLinks
                      }`
                    }
                  >
                    Shop
                  </NavLink>
                </li>
                <li className={classes.navListItems}>
                  <NavLink
                    to="/contact"
                    className={(data) =>
                      `${data.isActive ? classes.activeLink : ""} ${
                        classes.navLinks
                      }`
                    }
                  >
                    Contact us
                  </NavLink>
                </li>
                <li className={classes.navListItems}>
                  <NavLink
                    to="/about"
                    className={(data) =>
                      `${data.isActive ? classes.activeLink : ""} ${
                        classes.navLinks
                      }`
                    }
                  >
                    About us
                  </NavLink>
                </li>
              </ul>
            </nav>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HeaderBottom;
