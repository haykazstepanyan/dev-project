import {
  List,
  ListItemButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import CategoryIcon from "@mui/icons-material/Category";
import AppleIcon from "@mui/icons-material/Apple";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { adminLayoutStyles } from "./styles";

export default function AdminLeftSidebar() {
  const userData = useSelector((state) => state.auth);
  const userName = useSelector((state) => state.auth.userName);
  const userRole = useSelector((state) => state.auth.role);

  const classes = adminLayoutStyles();
  return (
    <nav className={classes.leftSidebar}>
      <div>
        <Avatar alt="Remy Sharp" className={classes.avatarStyle}>
          A A
        </Avatar>
        <p className={classes.adminNameStyle}>{userName}</p>
        <p className={classes.adminRoleStyle}>{userRole.replace("_", " ")}</p>
      </div>
      <List className={classes.listStyle}>
        <NavLink
          to="brand"
          className={(data) =>
            `${
              data.isActive
                ? classes.activeLink
                : `${classes.linkStyle} notActive`
            }`
          }
        >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AppleIcon />
              </ListItemIcon>
              <ListItemText primary="Brands" />
            </ListItemButton>
          </ListItem>
        </NavLink>
        <NavLink
          to="category"
          className={(data) =>
            `${
              data.isActive
                ? classes.activeLink
                : `${classes.linkStyle} notActive`
            }`
          }
        >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CategoryIcon />
              </ListItemIcon>
              <ListItemText primary="Categories" />
            </ListItemButton>
          </ListItem>
        </NavLink>
        <NavLink
          to="product"
          className={(data) =>
            `${
              data.isActive
                ? classes.activeLink
                : `${classes.linkStyle} notActive`
            }`
          }
        >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Inventory2Icon />
              </ListItemIcon>
              <ListItemText primary="Products" />
            </ListItemButton>
          </ListItem>
        </NavLink>
        <NavLink
          to="contactMessage"
          className={(data) =>
            `${
              data.isActive
                ? classes.activeLink
                : `${classes.linkStyle} notActive`
            }`
          }
        >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText primary="Contact Messages" />
            </ListItemButton>
          </ListItem>
        </NavLink>
        <NavLink
          to="manageAccount"
          className={(data) =>
            `${
              data.isActive
                ? classes.activeLink
                : `${classes.linkStyle} notActive`
            }`
          }
        >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ManageAccountsIcon />
              </ListItemIcon>
              <ListItemText primary="Manage Account " />
            </ListItemButton>
          </ListItem>
        </NavLink>
        {userData.role === "MAIN_ADMIN" ? (
          <NavLink
            to="user"
            className={(data) =>
              `${
                data.isActive
                  ? classes.activeLink
                  : `${classes.linkStyle} notActive`
              }`
            }
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary="Users" />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ) : (
          ""
        )}
      </List>
    </nav>
  );
}
