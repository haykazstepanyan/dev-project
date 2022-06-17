import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { appActions } from "./redux/appSlice";
import Routes from "./routes";
import { documentStyles } from "./components/styles/styles";
import mainTheme from "./components/styles/mainTheme";

function App() {
  const dispatch = useDispatch();

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
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
