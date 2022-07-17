import { Link } from "react-router-dom";
import { dashboardStyles } from "./styles";

function Dashboard() {
  const classes = dashboardStyles();
  return (
    <div className={classes.dashboardContainer}>
      <h3>Dashboard</h3>
      <p>
        From your account dashboard. you can easily check & view your
        <Link to="/account/orders"> recent orders,</Link>
        <Link to="/account/details">
          {" "}
          edit your password and account details.
        </Link>
      </p>
    </div>
  );
}
export default Dashboard;
