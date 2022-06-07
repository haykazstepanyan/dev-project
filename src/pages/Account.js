import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { createUseStyles } from "react-jss";
// import { makeStyles } from "@mui/styles";
import "./Style.css";

// const useStyles = createUseStyles({});
const useStyles = createUseStyles({
  try: {
    "&:hover": {
      background: "rgb(121, 162, 6)",
    },
    cursor: "pointer",
  },
});
const Account = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const tablist = [
    "Dashboard",
    "Orders",

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
                  const path = item.toLowerCase().replace(/\s/g, "");
                  return (
                    <ListItem
                      className={classes.try}
                      key={index}
                      // spacing={4}
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
