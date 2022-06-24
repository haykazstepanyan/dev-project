import { useEffect } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { hideNotification } from "../../redux/app/appSlice";
import notificationStyles from "./styles";

function Notification({ open, type, message }) {
  const dispatch = useDispatch();
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(hideNotification());
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, [dispatch]);
  const classes = notificationStyles();
  return (
    <div
      className={`${classes.notification} ${classes.hide} ${
        open && classes.show
      }`}
    >
      {type === "success" && (
        <>
          <CheckCircleOutlineIcon
            className={`${classes.notificationIcon} ${classes.notificationSuccess}`}
          />
          {message}
        </>
      )}
      {type === "error" && (
        <>
          <HighlightOffIcon
            className={`${classes.notificationIcon} ${classes.notificationError}`}
          />
          {message}
        </>
      )}
    </div>
  );
}

Notification.propTypes = {
  open: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Notification;
