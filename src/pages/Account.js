import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { accountStyles } from "./Styles";
import Banner from "../components/common/Banner";

const Account = () => {
  const navigate = useNavigate();
  const classes = accountStyles();

  const tabList = [
    "Dashboard",
    "Orders",

    "Addresses",
    "Account Details",
    "Logout",
  ];
  return (
    <>
      <Banner name="My Account" />
      <Box pt={12} pb={8}>
        <Container>
          <Grid container spacing={1}>
            <Grid item xs={3.5} pr={3} pt={0}>
              <List style={{ color: "#FFF" }}>
                {tabList.map((item, index) => {
                  const path = item.toLowerCase().replace(/\s/g, "");
                  return (
                    <ListItem
                      className={classes.try}
                      key={index}
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        p: 1,
                        m: 1,
                        bgcolor: "text.primary",
                        color: "#FFF",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        borderRadius: 1,
                      }}
                      onClick={() => navigate(`/account/${path}`)}
                    >
                      {item}
                    </ListItem>
                  );
                })}
              </List>
            </Grid>
            <Grid item xs={8} p={1}>
              <Outlet />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
export default Account;
