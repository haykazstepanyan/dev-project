const styles = {
  headerParts: {
    borderBottom: "1px solid #e1e1e1",
    color: "#222222",
  },
  pageLogo: {
    width: 80,
    height: 80,
  },
  filterContainer: {
    padding: [[25, "10%"]],
    borderRight: "1px solid #e1e1e1",
    borderLeft: "1px solid #e1e1e1",
  },
  filterContainerContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 30,
    border: "1px solid #e1e1e1",
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
      color: "#198754",
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
      color: "#198754",
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
    color: "#222",
  },
  nav: {
    borderLeft: "1px solid #e1e1e1",
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
    color: "#222",
    fontSize: 13,
    textTransform: "uppercase",
    fontWeight: "bold",
    transition: "all 0.3s ease 0s",
    "&:before": {
      position: "absolute",
      content: "''",
      width: "100%",
      height: 3,
      background: "#222",
      bottom: -1,
      left: 0,
      opacity: 0,
      visibility: "hidden",
      transition: ".3s",
    },
    "&:hover": {
      color: "#79a206",
      "&:before": {
        opacity: 1,
        visibility: "visible",
      },
    },
  },
};

export default styles;
