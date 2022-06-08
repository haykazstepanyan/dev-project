import React from "react";
import Routes from "./routes/Routes";
import mainTheme from "./components/styles/mainTheme";
import { ThemeProvider } from "@mui/material/styles";
import { documentStyles } from "./components/styles/styles";

function App() {
  documentStyles();
  return (
    <ThemeProvider theme={mainTheme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
