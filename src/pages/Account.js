import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import clsx from "clsx";
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
import { tabList } from "../constants/constants";

function Account() {
  const classes = accountStyles();
  const [signOutModal, setSignOutModal] = useState(false);
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
                    <MuiListItem key={item} className={classes.listItem}>
                      <NavLink
                        to={`${path}`}
                        className={(data) =>
                          clsx(classes.navLinks, {
                            [classes.activeLink]: data.isActive,
                          })
                        }
                      >
                        {item}
                      </NavLink>
                    </MuiListItem>
                  );
                })}
                <MuiListItem className={classes.listItem}>
                  <Button
                    color="secondary"
                    onClick={signOutModalShow}
                    disableRipple
                  >
                    Logout
                  </Button>
                </MuiListItem>
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
