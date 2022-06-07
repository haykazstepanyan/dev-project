import { colors } from "../../constants/constants";

const styles = {
  header: {
    display: "initial",
    background: "red",
  },
  headerParts: {
    borderBottom: `1px solid ${colors.milky}`,
  },
  pageLogo: {
    width: 80,
    height: 80,
  },
  filterContainer: {
    padding: [[25, "10%"]],
    borderRight: `1px solid ${colors.milky}`,
    borderLeft: `1px solid ${colors.milky}`,
  },
  filterContainerContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 30,
    border: `1px solid ${colors.milky}`,
  },
  searchBox: {
    position: "relative",
    "&:before": {
      content: "''",
      width: 1,
      height: 24,
      background: "#a1a1a1",
      position: "absolute",
      top: "calc(50% - 6px)",
      marginTop: -8,
      left: 0,
    },
  },
  searchInput: {
    border: 0,
    height: 54,
    fontSize: 14,
    fontWeight: 400,
    padding: [[0, 50, 0, 20]],
    opacity: 0.7,
    "&:focus": {
      outline: "none",
    },
  },
  searchIcon: {
    cursor: "pointer",
    "&:hover": {
      color: colors.success,
    },
  },
  iconsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icons: {
    marginRight: 20,
    cursor: "pointer",
    "&:hover": {
      color: colors.success,
    },
  },
  bottomCategories: {
    display: "flex",
    alignItems: "center",
  },
  bottomCategoriesHeading: {
    paddingLeft: 25,
  },
  categoryLinks: {
    color: colors.black,
  },
  headerBottom: {
    position: "sticky",
    top: "0px",
    background: colors.white,
  },
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
    fontWeight: "bold",
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
};

export default styles;
