import { createUseStyles } from "react-jss";

const documentStyles = createUseStyles({
  "@global": {
    "*": {
      margin: 0,
      padding: 0,
      listStyleType: "none",
    },
    body: {
      fontSize: 14,
      fontStyle: "normal",
      fontWeight: 400,
      fontFamily: "'Rubik', sans-serif",
    },
    a: {
      textDecoration: "none",
      color: "inherit",
    },
  },
});

const globalStyles = createUseStyles({
  header: {
    background: "#f0f0f0",
    borderBottom: "1px solid #e1e1e1",
    padding: [[50, 0]],
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    "& h1": {
      fontSize: 42,
      marginBottom: 9,
    },
  },
  featuresSectionStyle: {
    padding: [[100, 0, 93]],
    "& img": {
      marginBottom: 23,
    },
  },
  textCenter: {
    textAlign: "center",
  },
  mxAuto: {
    margin: "0 auto !important",
  },
  w100: {
    width: "100%",
  },
  mb30: {
    marginBottom: 30,
  },
});

export { documentStyles, globalStyles };
