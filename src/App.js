import React from "react";
import Routes from "./routes/Routes";
import mainTheme from "./components/styles/mainTheme";
import { ThemeProvider } from "@mui/material/styles";
import { documentStyles } from "./components/styles/styles";
import { StyledEngineProvider } from "@mui/material/styles";

function App() {
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
