import React from "react";
import {
  ClickableDropdown,
  HoverableDropdown,
} from "../../components/dropdown";
import Grid from "@mui/material/Grid";
import Container from "@mui/system/Container";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import { middlePartStyles, commonStyles } from "./styles";
import { useState } from "react";
import logo from "../../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";

const HeaderMiddle = () => {
  const navigate = useNavigate();
  const navigateFavPage = () => {
    navigate("/wishlist");
  };

  const [category, setCategory] = useState("All categories");
  const [inputValue, setInputValue] = useState("");

  const categoriesArray = [
    "All categories",
    "Category 1",
    "Category 2",
    "Category 3 for kids",
    "Category 4",
    "Category 5",
  ];
  const accountData = ["My account", "Shopping cart", "Wishlist"];
  const classes = middlePartStyles();
  const headerClasses = commonStyles();

  const handleCategory = (value) => {
    categoriesArray.includes(value) && setCategory(value);
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className={headerClasses.headerParts}>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item sm={2} className={classes.logoBox}>
            <img className={classes.pageLogo} src={logo} alt="Logo" />
          </Grid>
          <Grid item sm={8} className={classes.filterContainer}>
            <div className={classes.filterContainerContent}>
              <ClickableDropdown
                options={categoriesArray}
                icon={<KeyboardArrowDownIcon />}
                change={handleCategory}
                value={category}
                topDistance="10px"
              />
              <div className={classes.searchBox}>
                <input
                  className={classes.searchInput}
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="Search product..."
                />
              </div>
              <SearchIcon className={classes.searchIcon} />
            </div>
          </Grid>
          <Grid item sm={2} className={classes.iconsContainer}>
            <HoverableDropdown
              value={<PeopleOutlineIcon />}
              list={accountData}
            />
            <Link to="/wishlist">
              <FavoriteBorderIcon
                onClick={navigateFavPage}
                className={classes.icons}
              />
            </Link>
            <WorkOutlineIcon className={classes.icons} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HeaderMiddle;
