import { createUseStyles } from "react-jss";
import { colors } from "../../constants/constants";

const notificationStyles = createUseStyles({
  notification: {
    position: "fixed",
    // bottom: 0,
    // right: 24,
    display: "flex",
    alignItems: "center",
    backgroundColor: colors.green,
    fontSize: 16,
    padding: [[8, 12]],
    minWidth: 150,
    borderRadius: 16,
    color: colors.white,

    zIndex: 10,
    transition: "all 1s ease",
  },
  hide: {
    right: 0,
    bottom: 0,
    opacity: 0,
  },
  show: {
    right: 24,
    bottom: 24,
    opacity: 1,
  },
  notificationIcon: {
    marginRight: 16,
  },
  notificationSuccess: {
    color: colors.success,
  },
  notificationError: {
    color: colors.red,
  },
});

export default notificationStyles;
