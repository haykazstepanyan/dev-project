import { createUseStyles } from "react-jss";

const aboutUsStyles = createUseStyles({
    aboutUsInfo: {
        padding: "100px 0",
    },
    aboutInfoTitle: {
        fontSize: "24px",
        lineHeight: "24px",
        textTransform: "capitalize",
        fontWeight: "400",
        marginBottom: "21px",
        textAlign: "center",
    },
    aboutInfoText: {
        textAlign: "center",
        fontSize: "14px",
        lineHeight: "26px",
    },
    featureBgImage: {
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
});

const contactUsStyles = createUseStyles({
    contactUsTitle: {
        fontSize: "21px",
        textTransform: "capitalize",
        fontWeight: "500",
        lineHeight: "20px",
        marginBottom: "25px",
    },
    contactUsMainInfo: {
        "& p": {
            padding: "13px 0",
            borderTop: "1px solid #e1e1e1",
            color: "#3b3b41",
            display: "flex",
            alignItems: "center",
            "& span": {
                marginLeft: "10px",
            },
        },
        "& a": {
            color: "#3b3b41",
            textDecoration: "none",
        },
    },
    contactUsForm: {
        "& label": {
            lineHeight: "18px",
            fontWeight: "500",
            marginBottom: "10px",
            display: "block",
        },
        "& input,textarea": {
            border: "1px solid #e1e1e1",
            height: "45px",
            background: "#ffffff",
            textIndent: "20px",
            color: "#757575",
            marginBottom: "20px",
            minWidth: "100%",
        },
        "& textarea": {
            paddingTop: "20px",
            minHeight: "100px",
        },
        "& input:focus, textarea:focus":{
            outline:"none",
        }
    },
});

const globalStyles = createUseStyles({
    header: {
        background: "#f0f0f0",
        borderBottom: "1px solid #e1e1e1",
        padding: "50px 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        "& h1": {
            fontSize: "42px",
            lineHeight: "50px",
            marginBottom: "9px",
        },
    },
    featuresSectionStyle: {
        padding: "100px 0 93px",
        "& img": {
            marginBottom: "23px",
        },
    },
    textCenter: {
        textAlign: "center",
    },
    mxAuto: {
        margin: "0 auto !important",
    },
    w100: {
        width: "100%",
    },
    mb30: {
        marginBottom: "30px",
    },
});

export { aboutUsStyles, contactUsStyles, globalStyles };
