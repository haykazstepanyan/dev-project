import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { appActions } from "./redux/app/appSlice";
import { checkIsAuth } from "./redux/auth/actions";
import Routes from "./routes";
import Notification from "./components/notification";
import { documentStyles } from "./components/styles/styles";
import mainTheme from "./components/styles/mainTheme";

function App() {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.app.notification);
  useEffect(() => {
    // const token = localStorage.getItem("token");
    // if (token) {
    dispatch(checkIsAuth());
    // }
  }, [dispatch]);

  useEffect(() => {
    const handleIsMobileVersion = () =>
      dispatch(
        appActions.setIsMobileVersion({
          isMobile: window.innerWidth < 900,
        }),
      );
    handleIsMobileVersion();
    window.addEventListener("resize", handleIsMobileVersion);
    return () => window.removeEventListener("resize", handleIsMobileVersion);
  }, [dispatch]);

  documentStyles();

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={mainTheme}>
        <Routes />
        {notification.show && (
          <Notification
            open
            type={notification.type}
            message={notification.message}
          />
        )}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
