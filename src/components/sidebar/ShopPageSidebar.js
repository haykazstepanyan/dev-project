import PropTypes from "prop-types";
import { Container, Box, Slider, TextField } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Button from "../button";
import ListItems from "../listItems";
import { shopSidebarStyles } from "./styles";
import { filterRangeTheme } from "./theme";

function ShopPageSidebar({
  brands,
  brandsChange,
  selectedBrands,
  categories,
  categoriesChange,
  selectedCategories,
  filterByPrice,
  values,
  defaultMaxValue,
  valueChange,
  minValueChange,
  maxValueChange,
}) {
  const classes = shopSidebarStyles();

  return (
    <div className={classes.shopSidebar}>
      <div className={classes.filterBox}>
        <h3 className={classes.filterName}>Filter by Price</h3>
        <Box width="100%" mb={2.5}>
          <ThemeProvider theme={filterRangeTheme}>
            <Slider
              size="small"
              value={values}
              onChange={valueChange}
              min={0}
              max={defaultMaxValue || 0}
              valueLabelDisplay="auto"
              className={classes.filterRange}
            />
          </ThemeProvider>
        </Box>
        <Container disableGutters className={classes.filterRangeInputs}>
          <div>
            <Button
              color="secondary"
              borders="rounded"
              size="small"
              onClick={filterByPrice}
              disableRipple
            >
              Apply
            </Button>
          </div>
          <div className={classes.minMaxValues}>
            <div>
              <TextField
                id="outlined-number"
                label="Min:"
                type="number"
                className={classes.minMaxInputs}
                InputLabelProps={{
                  shrink: true,
                }}
                value={values[0]}
                onChange={minValueChange}
              />
            </div>
            <div>
              <TextField
                id="outlined-number"
                label="Max:"
                type="number"
                className={classes.minMaxInputs}
                InputLabelProps={{
                  shrink: true,
                }}
                value={values[1]}
                onChange={maxValueChange}
              />
            </div>
          </div>
        </Container>
      </div>
      <div className={classes.filterBox}>
        <h3 className={classes.filterName}>Filter by Category</h3>
        <ListItems
          checkBoxChange={categoriesChange}
          list={categories}
          selected={selectedCategories}
        />
      </div>
      <div className={classes.filterBox}>
        <h3 className={classes.filterName}>Filter by Brand</h3>
        <ListItems
          checkBoxChange={brandsChange}
          list={brands}
          selected={selectedBrands}
        />
      </div>
    </div>
  );
}

ShopPageSidebar.propTypes = {
  brands: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      createdAt: PropTypes.string,
      updatedAt: PropTypes.string,
    }),
  ),
  brandsChange: PropTypes.func,
  selectedBrands: PropTypes.arrayOf(PropTypes.number),
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      createdAt: PropTypes.string,
      updatedAt: PropTypes.string,
    }),
  ),
  categoriesChange: PropTypes.func,
  selectedCategories: PropTypes.arrayOf(PropTypes.number),
  values: PropTypes.arrayOf(PropTypes.number),
  defaultMaxValue: PropTypes.number,
  filterByPrice: PropTypes.func,
  valueChange: PropTypes.func,
  minValueChange: PropTypes.func,
  maxValueChange: PropTypes.func,
};

export default ShopPageSidebar;
