import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { shopSidebarStyles } from "./styles";
import Button from "../button";
import { ThemeProvider } from "@mui/material/styles";
import { filterRangeTheme } from "./theme";
import Input from "@mui/material/Input";
import Container from "@mui/system/Container";

function valuetext(value) {
  return `${value}`;
}

const ShopPageSidebar = () => {
  const classes = shopSidebarStyles();
  const [value, setValue] = useState([0, 100]);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };
  const handleMinValueChange = (e) => {
    setValue((value) => [e.target.value, value[1]]);
  };
  const handleMaxValueChange = (e) => {
    setValue((value) => [value[0], e.target.value]);
  };
  return (
    <div className={classes.shopSidebar}>
      <div>
        <h3 className={classes.filterName}>Filter by Price</h3>
        <Box width={"100%"} mb={2.5}>
          <ThemeProvider theme={filterRangeTheme}>
            <Slider
              // getAriaLabel={() => "Minimum distance"}
              size="small"
              value={value}
              onChange={handleChange}
              min={0}
              max={450}
              //   className={classes.filterRangeInput}
              // getAriaValueText={valuetext}
              // defaultValue={70}
              // aria-label="Small"
              valueLabelDisplay="auto"
              className={classes.filterRange}
              //   color="primary"
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
              <span>Min:</span>
              <Input value={value[0]} onChange={handleMinValueChange} />
            </div>
            <div>
              <span>Max:</span>
              <Input value={value[1]} onChange={handleMaxValueChange} />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ShopPageSidebar;
