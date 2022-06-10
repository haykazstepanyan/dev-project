import { createUseStyles } from "react-jss";
import { colors } from "../../constants/constants";

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
    background: colors.lightGrey,
    borderBottom: `1px solid ${colors.milky}`,
    padding: [[50, 0]],
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    "& h1": {
      fontSize: 42,
      marginBottom: 9,
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
  },
});
const formStyles = createUseStyles({
  accountForm: {
    border: "4px solid #e1e1e1",
    padding: "23px 20px 29px",
    borderRadius: "5px",
  },
  inputContainer: {
    display: "flex !important",
    flexDirection: "column",
    marginBottom: "20px",
    width: "100%",
    "& input": {
      height: "40px",
      maxWidth: "100%",
      padding: [0, 20],
      width: "100%",
    },
    "& label": {
      fontSize: "16px",
      fontWeight: 400,
      color: "#222222",
      lineHeight: "12px",
      marginBottom: "12px",
    },
  },
  lostPasswordLink: {
    lineHeight: "18px",
    marginBottom: "20px",
    fontSize: "15px",
    display: "block",
    textAlign: "end",
  },
  label: {
    fontSize: "16px",
    fontWeight: 400,
    cursor: "pointer",
    lineHeight: "12px",
    marginBottom: "12px",
  },
  loginSumbit: {
    display: "flex",
    justifyContent: "end",
    alignItems: "end",
    flexDirection: "row!important",
  },
  btnCnt: {
    display: "flex",
    flexDirection: "row!important",
    justifyContent: "end",
    alignItems: "center",
  },
  registerBtnContainer: {
    display: "flex",
    justifyContent: "end",
  },
});

export { documentStyles, globalStyles };
