import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import Routes from "./routes";
import { documentStyles } from "./components/styles/styles";

import mainTheme from "./components/styles/mainTheme";
import { appActions } from "./redux/appSlice";

function App() {
  const dispatch = useDispatch();

  const handleIsMobileVersion = () =>
    dispatch(
      appActions.setIsMobileVersion({
        isMobile: Boolean(window.innerWidth < 900),
      }),
    );

  useEffect(() => {
    handleIsMobileVersion();
    window.addEventListener("resize", handleIsMobileVersion);
    return () => window.removeEventListener("resize", handleIsMobileVersion);
  }, [handleIsMobileVersion]);

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
