import { useState } from "react";
import Grid from "@mui/material/Grid";
import styles from "./styles";
import { createUseStyles } from "react-jss";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  ClickableDropdown,
  HoverableDropdown,
} from "../../components/dropdown";
import { Box } from "@mui/material";
import { Container } from "@mui/system";
import logo from "../../assets/images/logo.png";
import SearchIcon from "@mui/icons-material/Search";

const useStyles = createUseStyles(styles);

const Header = () => {
  const [currency, setCurrency] = useState("USD");
  const [language, setLanguage] = useState("English");
  const [category, setCategory] = useState("All categories");
  const [inputValue, setInputValue] = useState("");

  const possibleCurrencies = ["USD", "EUR", "GBP"];
  const possibleLanguage = ["English", "Russian", "Armenian"];
  const categoriesArray = [
    "All categories",
    "Category 1",
    "Category 2",
    "Category 3 for kids",
    "Category 4",
    "Category 5",
  ];

  const classes = useStyles();

  const handleCurrency = (value) => {
    possibleCurrencies.includes(value) && setCurrency(value);
  };
  const handleLanguage = (value) => {
    possibleLanguage.includes(value) && setLanguage(value);
  };
  const handleCategory = (value) => {
    categoriesArray.includes(value) && setCategory(value);
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <header>
      <div>
        <Container maxWidth="lg" className={classes.headerTop}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <div>
              <p>Free Delivery: Take advantage of our time to save event</p>
            </div>
            <Box sx={{ display: "flex" }}>
              <HoverableDropdown
                icon={<KeyboardArrowDownIcon />}
                value={currency}
                change={handleCurrency}
                list={possibleCurrencies}
              />
              <HoverableDropdown
                icon={<KeyboardArrowDownIcon />}
                value={language}
                change={handleLanguage}
                list={possibleLanguage}
              />
            </Box>
          </Grid>
        </Container>
        <Container maxWidth="lg">
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item sm={3}>
              <img className={classes.pageLogo} src={logo} alt="Logo" />
            </Grid>
            <Grid item sm={6} className={classes.filterContainer}>
              <ClickableDropdown
                options={categoriesArray}
                icon={<KeyboardArrowDownIcon />}
                change={handleCategory}
                value={category}
              />
              <div className={classes.searchBox}>
                <input
                  className={classes.searchInput}
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="Search product..."
                />
                <SearchIcon className={classes.searchIcon} />
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </header>
  );
};

export default Header;
