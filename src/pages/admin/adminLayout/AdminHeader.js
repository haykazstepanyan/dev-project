import LogoutIcon from "@mui/icons-material/Logout";
import Button from "../../../components/button/Button";
import { adminLayoutStyles } from "./styles";

export default function AdminHeader() {
  const classes = adminLayoutStyles();
  return (
    <div className={classes.adminHeader}>
      <div className={classes.textRight}>
        <Button size="small" page="admin" disableRipple>
          <>
            <LogoutIcon />
            Logout
          </>
        </Button>
      </div>
    </div>
  );
}
