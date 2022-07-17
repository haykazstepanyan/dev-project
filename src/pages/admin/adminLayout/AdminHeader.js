import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import Button from "../../../components/button/Button";
import { adminLayoutStyles } from "./styles";

export default function AdminHeader() {
  const classes = adminLayoutStyles();
  return (
    <div className={classes.adminHeader}>
      <div className={classes.textRight}>
        <Button sx={{ marginRight: 2 }} size="small" page="admin" disableRipple>
          <Link to="/">Go to Home Page</Link>
        </Button>
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
