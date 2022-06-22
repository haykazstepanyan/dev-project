import {
  List,
  ListItemButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import CategoryIcon from "@mui/icons-material/Category";
import AppleIcon from "@mui/icons-material/Apple";
import EmailIcon from "@mui/icons-material/Email";
import { adminLayoutStyles } from "./styles";

export default function AdminLeftSidebar() {
  const classes = adminLayoutStyles();
  return (
    <nav className={classes.leftSidebar}>
      <div>
        <Avatar alt="Remy Sharp" className={classes.avatarStyle}>
          A A
        </Avatar>
        <p className={classes.adminNameStyle}>Admin Admin</p>
        <p className={classes.adminRoleStyle}>Admin</p>
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
      </List>
    </nav>
  );
}
