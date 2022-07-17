import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";
import AdminHeader from "./adminLayout/AdminHeader";
import AdminLeftSidebar from "./adminLayout/AdminLeftSidebar";

export default function AdminDashboard() {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        lg={2}
        md={3}
        sm={4}
        style={{ borderRight: "1px solid #e5edef" }}
      >
        <AdminLeftSidebar />
      </Grid>
      <Grid item xs={12} lg={10} md={9} sm={8}>
        <AdminHeader />
        <Outlet />
      </Grid>
    </Grid>
  );
}
