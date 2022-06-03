const styles = {
  headerTop: {
    borderBottom: "1px solid #e1e1e1",
    color: "#222222",
  },
  pageLogo: {
    width: 120,
    height: 120,
  },
  filterContainer: {
    display: "flex",
    alignItems: "center",
  },
  searchBox: {
    position: "relative",
  },
  searchInput: {
    border: 0,
    height: 54,
    fontSize: 14,
    fontWeight: 400,
    padding: "0 50px 0 20px",
    opacity: 0.7,
    "&:focus": {
      outline: "none",
    },
  },
};

export default styles;
