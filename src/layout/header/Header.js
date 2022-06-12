import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/system/Container";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import AccountLinks from "./AccountLinks";
import Drawer from "./Drawer";
import StickyHeader from "./StickyHeader";
import { headerStyles } from "./styles";
import { useSelector } from "react-redux";

const Header = () => {
  const classes = headerStyles();

  const isMobileVersion = useSelector((state) => state.app.isMobile);

  return (
    <header className={classes.header}>
      <div className={classes.headerParts}>
        <Container maxWidth="lg">
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Logo />
            {isMobileVersion ? (
              <>
                <AccountLinks />
                <Drawer />
              </>
            ) : (
              <>
                <SearchBox />
                <AccountLinks />
              </>
            )}
          </Grid>
        </Container>
      </div>
      {!isMobileVersion && <StickyHeader />}
    </header>
  );
};

export default Header;
