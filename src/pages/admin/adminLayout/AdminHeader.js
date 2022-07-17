import { useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { Dialog, DialogTitle, DialogActions } from "@mui/material";
import { useDispatch } from "react-redux";
import { signOut } from "../../../redux/auth/actions";
import Button from "../../../components/button/Button";
import { adminLayoutStyles } from "./styles";

export default function AdminHeader() {
  const [signOutModal, setSignOutModal] = useState(false);
  const classes = adminLayoutStyles();
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
      <div className={classes.adminHeader}>
        <div className={classes.textRight}>
          <Button
            size="small"
            page="admin"
            disableRipple
            onClick={signOutModalShow}
          >
            <>
              <LogoutIcon />
              Logout
            </>
          </Button>
        </div>
      </div>
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
                page="admin"
                color="secondary"
                onClick={() => setSignOutModal(false)}
                disableRipple
              >
                Cancel
              </Button>
              <Button
                color="primary"
                page="admin"
                onClick={handleSignOut}
                disableRipple
              >
                Sign Out
              </Button>
            </DialogActions>
          </div>
        </Dialog>
      )}
    </>
  );
}
