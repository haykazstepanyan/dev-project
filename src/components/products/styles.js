import { createUseStyles } from "react-jss";
import { colors } from "../../constants/constants";

const productItemstyles = createUseStyles({
  productCard: {
    width: 255,
    textAlign: "center",
  },
  productName: {
    fontSize: 14,
    color: "#222",
    textTransform: "Capitalize",
    height: 48,
  },
  productPrice: {
    fontWeight: [["bold"], "!important"],
    fontSize: 15,
    color: colors.green,
  },
});

export default productItemstyles;
