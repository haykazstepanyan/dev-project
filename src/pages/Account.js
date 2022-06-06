import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { createUseStyles } from "react-jss";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../components/User/Dashboard";

import "./Style.css";

const useStyles = createUseStyles({
  try: {
    "&:hover": {
      background: "rgb(121, 162, 6)",
    },
    cursor: "pointer",
  },
});

const Account = () => {
  const classes = useStyles();
  const tablist = [
    "Dashboard",
    "Orders",
    "Downloads",
    "Addresses",
    "Account Details",
    "Logout",
  ];
  return (
    <>
      <div className="about-us-section-header">
        <div>
          <h1>My Account</h1>
          <div>
            <Link to="/">Home</Link> / My Account
          </div>
        </div>
      </div>
      <Box pt={12} pb={8}>
        <Container>
          <Grid container spacing={1}>
            <Grid item xs={3.5} pr={3} pt={0}>
              <List style={{ color: "#FFF" }}>
                {tablist.map((item, index) => {
                  return (
                    <Link to="/dashboard">
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
                      >
                        {item}
                      </ListItem>
                    </Link>
                  );
                })}
              </List>
            </Grid>
            {/* <Grid item xs={8} sx={{ bgcolor: "success.main" }} p={1}>
              MEC
            </Grid> */}
            <Routes>
              <Route path="/account/dashboard" element={<Dashboard />} />
            </Routes>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
export default Account;
