import { useState } from "react";
import { Container, Box, Slider, TextField } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Button from "../button";
import ListItems from "../listItems";
import { brands, categories } from "../../DUMMY_DATA";
import { shopSidebarStyles } from "./styles";
import { filterRangeTheme } from "./theme";

function ShopPageSidebar() {
  const classes = shopSidebarStyles();
  const [value, setValue] = useState([0, 100]);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };
  const handleMinValueChange = (e) => {
    setValue((prevState) => [+e.target.value, prevState[1]]);
  };
  const handleMaxValueChange = (e) => {
    setValue((prevState) => [prevState[0], +e.target.value]);
  };

  return (
    <div className={classes.shopSidebar}>
      <div className={classes.filterBox}>
        <h3 className={classes.filterName}>Filter by Price</h3>
        <Box width="100%" mb={2.5}>
          <ThemeProvider theme={filterRangeTheme}>
            <Slider
              size="small"
              value={value}
              onChange={handleChange}
              min={0}
              max={450}
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
              disableRipple
            >
              Filter
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
                value={value[0]}
                onChange={handleMinValueChange}
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
                value={value[1]}
                onChange={handleMaxValueChange}
              />
            </div>
          </div>
        </Container>
      </div>
      <div className={classes.filterBox}>
        <h3 className={classes.filterName}>Filter by Category</h3>
        <ListItems list={categories} />
      </div>
      <div className={classes.filterBox}>
        <h3 className={classes.filterName}>Filter by Brand</h3>
        <ListItems list={brands} />
      </div>
    </div>
  );
}

export default ShopPageSidebar;
