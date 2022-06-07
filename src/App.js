import Routes from "./routes/Routes";
import mainTheme from "./components/common/mainTheme";
import { createUseStyles } from "react-jss";
import { ThemeProvider } from "@mui/material/styles";
import globalStyles from "./components/common/styles";

const useStyles = createUseStyles(globalStyles);

function App() {
  useStyles();
  return (
    <ThemeProvider theme={mainTheme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
