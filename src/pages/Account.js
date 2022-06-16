import { NavLink, Outlet } from "react-router-dom";
import {
  Container,
  Box,
  Grid,
  List as MuiList,
  ListItem as MuiListItem,
} from "@mui/material";
import Banner from "../components/common/Banner";
import { accountStyles } from "./styles";

function Account() {
  const classes = accountStyles();

  const tabList = ["dashboard", "orders", "account details", "login"];
  return (
    <>
      <Banner name="My Account" />

      <Box pt={12} pb={8}>
        <Container>
          <Grid container spacing={1}>
            <Grid item xs={3.5} pr={3} pt={0}>
              <MuiList style={{ color: "#FFF" }}>
                {tabList.map((item) => {
                  const path = item === "account details" ? "details" : item;
                  return (
                    <NavLink
                      key={item}
                      to={`/account/${path}`}
                      className={(data) =>
                        `${data.isActive ? classes.activeLink : ""} `
                      }
                    >
                      <MuiListItem className={classes.listItem}>
                        {item}
                      </MuiListItem>
                    </NavLink>
                  );
                })}
              </MuiList>
            </Grid>
            <Grid item xs={8} p={1}>
              <Outlet />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
export default Account;
