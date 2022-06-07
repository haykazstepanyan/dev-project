import HeaderTop from "./HeaderTop";
import HeaderMiddle from "./HeaderMiddle";
import HeaderBottom from "./HeaderBottom";
import style from "./style";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(style);

const Header = () => {
  const classes = useStyles(style);
  return (
    <header className={classes.header}>
      <HeaderTop />
      <HeaderMiddle />
      <HeaderBottom />
    </header>
  );
};

export default Header;
