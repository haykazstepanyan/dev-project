import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  Container,
  Box,
  Grid,
  List as MuiList,
  ListItem as MuiListItem,
  Dialog,
  DialogTitle,
  DialogActions,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { signOut } from "../redux/auth/actions";
import Banner from "../components/common/Banner";
import { accountStyles } from "./styles";
import Button from "../components/button/Button";

function Account() {
  const classes = accountStyles();
  const [signOutModal, setSignOutModal] = useState(false);
  const tabList = ["dashboard", "orders", "account details", "logout"];
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOut());
    setSignOutModal(false);
  };
  const signOutModalShow = () => {
    setSignOutModal(true);
  };

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
                      to={`${path}`}
                      onClick={path === "logout" ? signOutModalShow : ""}
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
      {signOutModal && (
        <Dialog
          open={signOutModal}
          onClose={() => setSignOutModal(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <div style={{ padding: 20 }}>
            <DialogTitle
              id="alert-dialog-title"
              style={{ padding: 0, marginBottom: 20 }}
            >
              Are you sure you want to sign out?
            </DialogTitle>
            <DialogActions>
              <Button
                purpose="modalCancel"
                onClick={() => setSignOutModal(false)}
                disableRipple
              >
                Cancel
              </Button>
              <Button color="primary" onClick={handleSignOut} disableRipple>
                Sign Out
              </Button>
            </DialogActions>
          </div>
        </Dialog>
      )}
    </>
  );
}
export default Account;
