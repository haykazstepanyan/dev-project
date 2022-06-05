export const hoverableStyles = (theme) => {
  console.log(theme);
  return {
    textColor: {
      "&:hover": {
        color: "#198754",
      },
    },
    btn: {
      "&:hover": {
        backgroundColor: [["transparent"], "!important"],
      },
    },
  };
};
