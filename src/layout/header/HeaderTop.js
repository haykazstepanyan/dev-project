import React from "react";
import Box from "@mui/material/Box";
import { HoverableDropdown } from "../../components/dropdown";
import Container from "@mui/system/Container";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { commonStyles } from "./styles";

const HeaderTop = () => {
  const [currency, setCurrency] = useState("USD");
  const [language, setLanguage] = useState("English");

  const possibleCurrencies = ["USD", "EUR", "GBP"];
  const possibleLanguage = ["English", "Russian", "Armenian"];

  const headerClasses = commonStyles();

  const handleCurrency = (value) => {
    possibleCurrencies.includes(value) && setCurrency(value);
  };
  const handleLanguage = (value) => {
    possibleLanguage.includes(value) && setLanguage(value);
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
    </div>
  );
};

export default HeaderTop;
