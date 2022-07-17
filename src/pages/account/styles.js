import { createUseStyles } from "react-jss";
import { colors } from "../../constants/constants";

const orderStyles = createUseStyles({
  rowTitle: {
    borderBottom: "1.5px solid black",
    backgroundColor: "rgb(225, 225, 225)",
  },
  greenText: {
    cursor: "pointer",
    textAlign: "right!important",
    "& a": {
      color: colors.green,
    },
  },
  orderTitle: {
    fontSize: "22px",
    textTransform: "capitalize",
    fontWeight: 500,
    marginBottom: "15px",
    marginTop: "13px",
  },
});

const loginStyles = createUseStyles({
  title: {
    fontSize: "28px",
    textTransform: "capitalize",
    fontWeight: 500,
    lineHeight: "22px",
    marginBottom: "30px",
  },
  containerStyle: {
    marginTop: 60,
    marginBottom: 60,
  },
});
const detailsStyles = createUseStyles({
  container: {
    marginTop: "13px",
    paddingLeft: "0!important",
  },
  detailsTitle: {
    fontSize: "22px",
    fontWeight: "100%",
    marginBottom: "15px",
  },
  formControl: {
    width: "100%",
    "& a": {
      color: colors.green,
      fontWeight: 500,
    },
  },
  inputRadio: {
    marginTop: "10px",
    "& label": {
      fontWeight: 500,
    },
  },
  radioGroup: {
    display: "flex",
    flexDirection: "row!important",
    marginTop: "10px",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px",
    width: "100%",
    "& input": {
      height: "50px",
      maxWidth: "100%",
      padding: [0, 20],
      width: "100%",
    },
    "& label": {
      fontSize: "16px",
      fontWeight: 400,
      marginBottom: "12px",
    },
  },
  inputsContainer: {
    marginTop: "22px",
  },
  passwordInput: {
    width: "100%",
    "& fieldset": {
      border: "1px solid #e1e1e1!important",
      borderRadius: 0,
    },
    "& label.Mui-focused": {
      color: "rgba(0, 0, 0, 0.6)",
    },
    "& input::placeholder": {
      fontSize: 14,
    },
  },
  saveBtnContainer: {
    marginTop: "15px",
  },
  passwordForm: {
    marginTop: "20px",
  },
  hrStyle: {
    border: "1px solid #e1e1e1",
    borderTop: 0,
    borderRight: 0,
    borderLeft: 0,
    paddingBottom: 20,
  },
});
const dashboardStyles = createUseStyles({
  dashboardContainer: {
    marginTop: "13px",
    "& h3": {
      fontSize: "22px",
      marginBottom: "15px",
    },
    "& a": {
      color: colors.green,
    },
  },
});
export { orderStyles, loginStyles, detailsStyles, dashboardStyles };
