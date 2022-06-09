import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { accountStyles } from "./Styles";
import Banner from "../components/common/Banner";
import Layout from "../layout/Layout";

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
      <Layout />
      <Banner name="My Account" />
      
      <Box pt={12} pb={8}>
        <Container>
          <Grid container spacing={1}>
            <Grid item xs={3.5} pr={3} pt={0}>
              <List style={{ color: "#FFF" }}>
                {tabList.map((item, index) => {
                  const path = item.toLowerCase().replace(/\s/g, "");
                  return (
                    <NavLink
                      to={`/account/${path}`}
                      className={(data) =>{
                       return  `${data.isActive ? classes.activeLink : ""} `}
                      }
                    >
                      <ListItem className={classes.listItem} key={index}>
                        {item}
                      </ListItem>
                    </NavLink>
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
