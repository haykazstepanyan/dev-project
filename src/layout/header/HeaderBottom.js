import React from "react";
import { ClickableDropdown } from "../../components/dropdown";
import Grid from "@mui/material/Grid";
import Container from "@mui/system/Container";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { createUseStyles } from "react-jss";
import style from "./style";
import { Link } from "react-router-dom";

const useStyles = createUseStyles(style);
const categoriesArray = [
  "All categories",
  "Category 1",
  "Category 2",
  "Category 3 for kids",
  "Category 4",
  "Category 5",
];

const HeaderBottom = () => {
  const classes = useStyles();
  const categoriesToLink = categoriesArray.map((category) => (
    <Link to="/" className={classes.categoryLinks}>
      {category}
    </Link>
  ));
  return (
    <div className={`${classes.headerParts} ${classes.headerBottom}`}>
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
            />
          </Grid>
          <Grid item sm={9}>
            <nav className={classes.nav}>
              <ul className={classes.navList}>
                <li className={classes.navListItems}>
                  <Link to="/" className={classes.navLinks}>
                    Home
                  </Link>
                </li>
                <li className={classes.navListItems}>
                  <Link to="/products" className={classes.navLinks}>
                    Products
                  </Link>
                </li>
                <li className={classes.navListItems}>
                  <Link to="/contact" className={classes.navLinks}>
                    Contact us
                  </Link>
                </li>
                <li className={classes.navListItems}>
                  <Link to="/about" className={classes.navLinks}>
                    About us
                  </Link>
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
