import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ClickableDropdown } from "../../components/dropdown";
import { searchBoxStyles } from "./styles";

function SearchBox({ distance, toggleDrawer }) {
  const [category, setCategory] = useState({ id: 0, name: "All categories" });
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(
    searchParams.get("keyword") || "",
  );

  const categories = useSelector((state) => state.categories.categories);
  const navigate = useNavigate();

  const classes = searchBoxStyles();

  const handleCategory = (id, name) => {
    setCategory({ id, name });
  };
  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleSearch = () => {
    searchParams.delete("category");
    searchParams.delete("keyword");
    searchParams.delete("page");
    if (searchValue) {
      searchParams.set("keyword", searchValue);
    }
    if (category.id) {
      searchParams.set("category", category.id);
    }
    setSearchParams(searchParams);
    navigate(`/shop${window.location.search}`);
    toggleDrawer();
  };

  return (
    <Grid item md={8} className={classes.filterContainer}>
      <div className={classes.filterContainerContent}>
        <div className={classes.searchCategories}>
          <ClickableDropdown
            options={[{ id: 0, name: "All Categories" }, ...categories]}
            icon={<KeyboardArrowDownIcon />}
            change={handleCategory}
            value={category.name}
            topDistance={distance}
          />
        </div>
        <div className={classes.searchBox}>
          <input
            className={classes.searchInput}
            value={searchValue}
            onChange={handleInputChange}
            placeholder="Search product..."
          />
          <SearchIcon className={classes.searchIcon} onClick={handleSearch} />
        </div>
      </div>
    </Grid>
  );
}

SearchBox.propTypes = {
  distance: PropTypes.number,
  toggleDrawer: PropTypes.func,
};

export default SearchBox;
