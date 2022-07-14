import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { setIsMobileVersion } from "./redux/app/appSlice";
import { checkIsAuth } from "./redux/auth/actions";
import Routes from "./routes";
import Snackbar from "./components/snackbar";
import { documentStyles } from "./components/styles/styles";
import mainTheme from "./components/styles/mainTheme";
import Loader from "./components/loader";
import { getCategories } from "./redux/category/actions";

function App() {
  const dispatch = useDispatch();
  const snackbar = useSelector((state) => state.app.snackbar);
  const loading = useSelector((state) => state.app.loading);

  useEffect(() => {
    dispatch(checkIsAuth());
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    const handleIsMobileVersion = () =>
      dispatch(
        setIsMobileVersion({
          isMobile: window.innerWidth <= 900,
        }),
      );
    handleIsMobileVersion();
    window.addEventListener("resize", handleIsMobileVersion);
    return () => window.removeEventListener("resize", handleIsMobileVersion);
  }, [dispatch]);

  documentStyles();
  return (
    <>
      {!!loading.length && <Loader />}
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={mainTheme}>
          <Routes />
          {(snackbar.type || snackbar.message) && (
            <Snackbar type={snackbar.type} message={snackbar.message} />
          )}
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
}

export default App;
