import React, { useEffect } from "react";
import Routes from "./routes/Routes";
import { useDispatch } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { documentStyles } from "./components/styles/styles";
import { StyledEngineProvider } from "@mui/material/styles";
import mainTheme from "./components/styles/mainTheme";
import { appActions } from "./redux/appSlice";

const App = () => {
  const dispatch = useDispatch();

  const handleIsMobileVersion = () => {
    return dispatch(
      appActions.setIsMobileVersion({
        isMobile: Boolean(window.innerWidth < 900),
      })
    );
  };

  useEffect(() => {
    handleIsMobileVersion();
    window.addEventListener("resize", handleIsMobileVersion);
    return () => window.removeEventListener("resize", handleIsMobileVersion);
  }, []);

  documentStyles();

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={mainTheme}>
        <Routes />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
