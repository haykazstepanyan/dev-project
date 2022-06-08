import { createUseStyles } from "react-jss";

const aboutUsStyles = createUseStyles({
    aboutUsInfo: {
        padding: [[100, 0]],
    },
    aboutInfoTitle: {
        fontSize: 24,
        textTransform: "capitalize",
        fontWeight: 400,
        marginBottom: 21,
        textAlign: "center",
    },
    aboutInfoText: {
        textAlign: "center",
        fontSize: 14,
    },
    featureBgImage: {
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
});

const contactUsStyles = createUseStyles({
    contactUsTitle: {
        fontSize: 21,
        textTransform: "capitalize",
        fontWeight: 500,
        marginBottom: 25,
    },
    contactUsMainInfo: {
        "& p": {
            padding: [[13, 0]],
            borderTop: "1px solid #e1e1e1",
            color: "#3b3b41",
            display: "flex",
            alignItems: "center",
            "& span": {
                marginLeft: 10,
            },
        },
        "& a": {
            color: "#3b3b41",
            textDecoration: "none",
        },
    },
    contactUsForm: {
        "& label": {
            fontWeight: 500,
            marginBottom: 10,
            display: "block",
        },
        "& input,textarea": {
            border: "1px solid #e1e1e1",
            maxHeight: 45,
            height:45,
            background: "#ffffff",
            textIndent: 20,
            color: "#757575",
            marginBottom: 20,
            minWidth: "100%",
            maxWidth: "100%",
        },
        "& textarea": {
            paddingTop: 20,
            minHeight: 100,
        },
        "& input:focus, textarea:focus": {
            outline: "none",
        },
    },
});

const accountStyles = createUseStyles({
    try: {
        "&:hover": {
            background: "rgb(121, 162, 6)",
        },
        cursor: "pointer",
    },
});

const wishlistStyles = createUseStyles({
    wishlistTable: {
        "& .MuiTableCell-head": {
            textTransform: "capitalize",
            borderBottom: "3px solid #79a206",
            borderRight: "1px solid #e1e1e1",
            fontSize: 16,
            fontWeight: 600,
            padding: 10,
            textAlign: "center",
            backgroundColor: "#e1e1e1",
        },
        "& .MuiTableCell-body": {
            borderBottom: "1px solid #e1e1e1 !important",
            borderRight: "1px solid #e1e1e1 !important",
            borderLeft: "1px solid #e1e1e1 !important",
            textAlign: "center",
        },
        "& img": {
            width: 100,
            marginBottom: 0,
        },
        "& .price p": {
            color: "#222222",
            fontSize: 16,
            fontWeight: 600,
        },
        "& .stockStatus": {
            color: "#222222",
            fontSize: 16,
            fontWeight: 500,
        },
        boxShadow: "none !important",
    },
});

export { aboutUsStyles, contactUsStyles, accountStyles, wishlistStyles };
