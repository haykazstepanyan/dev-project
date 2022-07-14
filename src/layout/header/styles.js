import { createUseStyles } from "react-jss";
import { colors } from "../../constants/constants";

const logoStyles = createUseStyles({
  pageLogo: {
    // width: 100,
    height: 135,
    // height: 80,
  },
  "@media screen and (max-width: 900px)": {
    pageLogo: {
      // width: 50,
      height: 90,
    },
  },
});

const searchBoxStyles = createUseStyles({
  filterContainer: {
    padding: 25,
    borderRight: `1px solid ${colors.milky}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 140,
  },
  filterContainerContent: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    width: 480,
    borderRadius: 30,
    margin: [[0, "auto"]],
    padding: [[0, 15]],
    border: `1px solid ${colors.milky}`,
  },
  searchBox: {
    position: "relative",
    flexGrow: 3,
    "&:before": {
      content: "''",
      width: 1,
      height: 24,
      background: "#a1a1a1",
      position: "absolute",
      top: "calc(50% - 4px)",
      marginTop: -8,
      left: 0,
    },
  },
  searchCategories: {
    flexGrow: 1,
    "& button": {
      fontWeight: 400,
    },
  },
  searchInput: {
    border: 0,
    height: 54,
    fontSize: 14,
    fontWeight: 400,
    padding: [[0, 20, 0, 20]],
    opacity: 0.7,
    width: "80%",
    "&:focus": {
      outline: "none",
    },
  },
  searchIcon: {
    position: "absolute",
    top: 15,
    right: 0,
    cursor: "pointer",
    "&:hover": {
      color: colors.success,
    },
  },
  "@media screen and (max-width: 900px)": {
    filterContainer: {
      padding: 0,
      borderRight: "none",
    },
    filterContainerContent: {
      border: "none",
      flexDirection: "column-reverse",
      width: "100%",
      padding: 0,
    },
    searchBox: {
      border: `1px solid ${colors.milky}`,
      width: "100%",
      "&:before": {
        content: "none",
      },
    },
    searchCategories: {
      border: `1px solid ${colors.milky}`,
      marginTop: 25,
      padding: [[0, 20]],
    },
    searchInput: {
      padding: [[0, 10]],
      height: 34,
    },
    searchIcon: {
      top: 5,
      right: 8,
    },
  },
});

const iconsStyles = createUseStyles({
  iconsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    "& .MuiButton-root": {
      padding: 0,
      minWidth: "auto",
    },
  },
  icons: {
    cursor: "pointer",
    "&:hover": {
      color: colors.success,
    },
  },
  selectedCurrency: {
    color: colors.green,
  },
  bottomCategories: {
    display: "flex",
    alignItems: "center",
  },
  categoryLinks: {
    color: colors.black,
  },
  wishlistIconBtn: {
    padding: 0,
    color: colors.black,
    "& a": {
      fontSize: 0,
    },
  },
  "@media screen and (max-width: 900px)": {
    iconsContainer: {
      "& .MuiButton-root": {
        minWidth: "auto",
        padding: 0,
        paddingBottom: 3,
        marginRight: 8,
      },
    },
    icons: {
      marginRight: 8,
    },
    formatAlignIcon: {
      padding: 4,
      border: `1px solid ${colors.black}`,
    },
  },
});

const navbarStyles = createUseStyles({
  nav: {
    borderLeft: `1px solid ${colors.milky}`,
  },
  navList: {
    display: "flex",
    alignItems: "center",
  },
  navListItems: {
    padding: [[0, 15]],
  },
  navLinks: {
    position: "relative",
    display: "block",
    padding: [[15, 0]],
    color: colors.black,
    fontSize: 13,
    textTransform: "uppercase",
    fontWeight: 500,
    transition: "all 0.3s ease 0s",
    "&:before": {
      position: "absolute",
      content: "''",
      width: "100%",
      height: 3,
      background: colors.black,
      bottom: -1,
      left: 0,
      opacity: 0,
      visibility: "hidden",
      transition: ".3s",
    },
    "&:hover": {
      color: colors.green,
      "&:before": {
        opacity: 1,
        visibility: "visible",
      },
    },
  },
  activeLink: {
    color: colors.green,
    "&:before": {
      opacity: 1,
      visibility: "visible",
    },
  },
  "@media screen and (max-width: 900px)": {
    nav: {
      borderLeft: "none",
      marginTop: 25,
      alignItems: "start",
    },
    navList: {
      flexDirection: "column",
      padding: [[0, 15]],
    },
    navListItems: {
      borderBottom: `1px solid ${colors.milky}`,
      width: "100%",
      boxSizing: "border-box",
      padding: 0,
    },
    navLinks: {
      "&:before": {
        height: 2,
      },
    },
  },
});

const drawerStyles = createUseStyles({
  welcomeText: {
    textAlign: "center",
    marginBottom: 24,
    fontSize: 12,
  },
});

const headerStyles = createUseStyles({
  header: {
    display: "initial",
    background: "red",
  },
  headerParts: {
    borderBottom: `1px solid ${colors.milky}`,
  },
  stickyLine: {
    position: "sticky",
    top: "0px",
    background: colors.white,
    zIndex: 99,
  },
});

export {
  headerStyles,
  logoStyles,
  searchBoxStyles,
  iconsStyles,
  navbarStyles,
  drawerStyles,
};
