import { createUseStyles } from "react-jss";
import { colors } from "../../constants/constants";
const orderStyles = createUseStyles({
    rowTitle: {
        borderBottom: "1.5px solid black",
        backgroundColor: "rgb(225, 225, 225)",
      },
      greenText: {
        color: "green!important",
        cursor: "pointer",
        textAlign: "right!important",
      },
      orderTitle: {
        fontSize: "22px",
        textTransform: "capitalize",
        fontWeight: 500,
        marginBottom: "15px",
        marginTop: "13px",
      },
   
   
})

export {orderStyles}