import React from "react";
import { Link } from "react-router-dom";
import Container from "@mui/system/Container";
import Grid from "@mui/material/Grid";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import NavBar from "./NavBar";
import { ClickableDropdown } from "../../components/dropdown";
import { headerStyles } from "./styles";
import { categories } from "../../DUMMY_DATA";

const StickyHeader = () => {
  const classes = headerStyles();
  const categoriesArray = ["All categories", ...categories];

  const categoriesToLink = categoriesArray.map((category) => (
    <Link to="/" className={classes.categoryLinks}>
      {category}
    </Link>
  ));
  return (
    <div className={`${classes.headerParts} ${classes.stickyLine}`}>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item md={3} className={classes.bottomCategories}>
            <ClickableDropdown
              options={categoriesToLink}
              icon={<FormatListBulletedIcon />}
              value="Categories"
              topDistance={5}
            />
          </Grid>
          <NavBar />
        </Grid>
      </Container>
    </div>
  );
};

export default StickyHeader;
