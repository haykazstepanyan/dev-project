import PropTypes from "prop-types";
import clsx from "clsx";
import {
  FormControl,
  FormControlLabel,
  IconButton,
  //   InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  //   OutlinedInput,
  Select,
} from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import MenuIcon from "@mui/icons-material/Menu";
import { ToolbarStyles } from "./styles";
import { sortingData } from "../../constants/constants";

function Toolbar({
  order,
  changeOrder,
  productsLength,
  orderProductsBy,
  changeOrdering,
  sortProductsBy,
  changeSorting,
  pageNumber,
}) {
  const classes = ToolbarStyles();
  return (
    <div className={classes.shopWrapper}>
      <div className={classes.shopWrapperIconsContainer}>
        <IconButton
          disableRipple
          className={classes.shopWrapperIcons}
          onClick={() => changeOrder("multiple")}
        >
          <AppsIcon
            className={clsx({
              [classes.activeOrder]: order === "multiple",
            })}
          />
        </IconButton>
        <IconButton
          className={classes.shopWrapperIcons}
          disableRipple
          onClick={() => changeOrder("single")}
        >
          <MenuIcon
            className={clsx({
              [classes.activeOrder]: order === "single",
            })}
          />
        </IconButton>
      </div>
      <div className={classes.sortingFormControls}>
        <FormControl className={classes.sortingForm} size="small">
          <Select
            value={orderProductsBy}
            onChange={(e) => changeOrdering(e.target.value)}
            displayEmpty
            className={classes.shopSelect}
            inputProps={{ "aria-label": "Without label" }}
          >
            {sortingData.map((name) => (
              <MenuItem key={name} value={name}>
                Sort by {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={classes.radioFormControl}>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            value={sortProductsBy}
            onChange={(e) => changeSorting(e.target.value)}
            name="radio-buttons-group"
          >
            <FormControlLabel
              className={clsx(classes.radioButtons, {
                [classes.selectedRadioButton]: sortProductsBy === "asc",
              })}
              value="asc"
              control={<Radio disableRipple />}
              label="Asc"
            />
            <FormControlLabel
              className={clsx(classes.radioButtons, {
                [classes.selectedRadioButton]: sortProductsBy === "desc",
              })}
              value="desc"
              control={<Radio disableRipple />}
              label="Desc"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <div className={classes.productsLength}>
        {productsLength > 9
          ? `Showing ${(pageNumber - 1) * 9 + 1}-${
              pageNumber * 9 > productsLength ? productsLength : pageNumber * 9
            } of ${productsLength} results`
          : `Showing ${productsLength} results`}
      </div>
    </div>
  );
}

Toolbar.propTypes = {
  changeOrder: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  productsLength: PropTypes.number,
  orderProductsBy: PropTypes.string.isRequired,
  changeOrdering: PropTypes.func.isRequired,
  sortProductsBy: PropTypes.string.isRequired,
  changeSorting: PropTypes.func.isRequired,
  pageNumber: PropTypes.number.isRequired,
};

export default Toolbar;
