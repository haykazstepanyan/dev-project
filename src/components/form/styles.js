import { createUseStyles } from "react-jss";
import { colors } from "../../constants/constants";

const formStyles = createUseStyles({
  accountForm: {
    border: "4px solid #e1e1e1",
    padding: "23px 20px 29px",
    borderRadius: "5px",
  },
  inputContainer: {
    display: "flex",
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
      color: colors.black,
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
    "&:hover": {
      color: colors.green,
    },
  },
  label: {
    fontSize: "16px",
    fontWeight: 400,
    cursor: "pointer",
    lineHeight: "12px",
    marginBottom: "12px",
    "&:hover": {
      color: colors.green,
    },
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
  loginSubmit: {
    fontSize: "12px",
    fontWeight: 700,
    "&:hover": {
      background: colors.black,
    },
  },
  checkbox: {
    "& input[type='checkbox']": {
        color:colors.green,
      backgroundColor: colors.blue,
    },
  },
});

export { formStyles };
