import { createUseStyles } from "react-jss";
import { colors } from "../../constants/constants";

export const loadingStyles = createUseStyles({
    '@keyframes loading': {
        "0%":{
             transform: "rotate(0deg)",
           },
           "100%": {
             transform: "rotate(360deg)"
           },
     
       },
    loading:{
        width: "40px",
        height: "40px",
        border: "10px solid #f3f3f3",
        borderTop: "10px solid #383636", 
        borderRadius: "50%",
        animationName: "$loading",
        animation: "loading 1.5s linear infinite"
    },
    loadingContainer:{
        display:"flex", 
        justifyContent:"center",
        alignItems:"center"
    }
    
})