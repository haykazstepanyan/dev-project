import { useState } from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ClickableDropdown } from "../../components/dropdown";
import { categories } from "../../DUMMY_DATA";
import { searchBoxStyles } from "./styles";

function SearchBox({ distance }) {
  const [category, setCategory] = useState("All categories");
  const [inputValue, setInputValue] = useState("");
  const categoriesArray = ["All categories", ...categories];
  const classes = searchBoxStyles();

  const handleCategory = (value) => {
    return categoriesArray.includes(value) && setCategory(value);
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <Grid item md={8} className={classes.filterContainer}>
      <div className={classes.filterContainerContent}>
        <div className={classes.searchCategories}>
          <ClickableDropdown
            options={categoriesArray}
            icon={<KeyboardArrowDownIcon />}
            change={handleCategory}
            value={category}
            topDistance={distance}
          />
        </div>
        <div className={classes.searchBox}>
          <input
            className={classes.searchInput}
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Search product..."
          />
          <SearchIcon className={classes.searchIcon} />
        </div>
      </div>
    </Grid>
  );
}

SearchBox.propTypes = {
  distance: PropTypes.number,
};

export default SearchBox;
