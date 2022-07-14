import { createUseStyles } from "react-jss";
import { colors } from "../../../constants/constants";

const adminLayoutStyles = createUseStyles({
  mb10: {
    marginBottom: 10,
  },
  mb20: {
    marginBottom: 20,
  },
  textRight: {
    textAlign: "right",
  },
  avatarStyle: {
    width: 56,
    height: 56,
    backgroundColor: "#d3e1de",
    color: "#1e394c",
    margin: "auto",
  },
  listStyle: {
    "& span": {
      fontSize: 14,
    },
    "& svg": {
      width: 20,
      height: 20,
      color: "#575657",
    },
    "& li": {
      marginBottom: 10,
    },
    "& a.notActive li:hover": {
      "& svg": {
        color: "#575657",
      },
      borderRadius: 10,
      backgroundColor: "#d3e1de",
      color: "#575657",
      transition: "all 0.5s ease",
    },
  },
  activeLink: {
    "& svg": {
      color: "#d0efe9",
    },
    "& li": {
      borderRadius: 10,
      backgroundColor: "#24695c",
      color: "#d0efe9",
      transition: "all 0.5s ease",
    },
  },
  linkStyle: {
    "& li": {
      borderRadius: 10,
      backgroundColor: "white",
      color: "#082736",
      transition: "all 0.5s ease",
    },
  },
  leftSidebar: {
    borderRight: "1px solid #e5edef",
    padding: [[30, 10]],
    height: "100vh",
  },
  adminNameStyle: {
    textAlign: "center",
    color: "#24695c",
    fontWeight: 600,
    marginTop: 10,
    fontSize: 14,
  },
  adminRoleStyle: {
    textAlign: "center",
    color: "#24695c",
    fontWeight: 500,
    marginTop: 5,
    fontSize: 12,
    borderBottom: "1px solid #e5edef",
    paddingBottom: 20,
  },
  adminHeader: {
    padding: [[20, 30]],
    border: "1px solid #e8eff1",
    position: "sticky",
    top: 0,
    background: colors.white,
    zIndex: 10,
    backgroundColor: "#eff3f5",
  },
});

export { adminLayoutStyles };
