import { createTheme } from "@mui/material/styles";
import { colors } from "../../constants/constants";

const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { color: "primary" },
          style: {
            color: colors.white,
            background: colors.green,
            "&:hover": {
              background: colors.black,
            },
          },
        },
        {
          props: { color: "secondary" },
          style: {
            color: colors.white,
            background: colors.black,
            "&:hover": {
              background: colors.green,
            },
          },
        },
        {
          props: { page: "admin" },
          style: {
            color: colors.white,
            background: "#24695c",
          },
        },
        {
          props: { page: "admin", letter: "capitalize" },
          style: {
            color: "white",
            background: "#a3a3a3",
            textTransform: "capitalize",
            padding: [[20, 10]],
            fontSize: 16,
            "&:hover": {
              background: "#575657",
            },
          },
        },
        {
          props: { color: "info" },
          style: {
            color: colors.black,
            background: "transparent",
            "&:hover": {
              color: colors.green,
            },
          },
        },
        {
          props: { size: "small" },
          style: {
            fontSize: 12,
            fontWeight: 700,
            height: 34,
            padding: "5px 20px",
          },
        },
        {
          props: { size: "large" },
          style: {
            height: 65,
            padding: "0 45px",
            fontSize: 15,
            fontWeight: 500,
          },
        },
        {
          props: { borders: "rounded", size: "small" },
          style: {
            borderRadius: 20,
          },
        },
        {
          props: { borders: "rounded", size: "large" },
          style: {
            borderRadius: 30,
          },
        },
        {
          props: { type: "dropdownBtn" },
          style: {
            textTransform: "Capitalize",
            "&:hover": {
              backgroundColor: "transparent",
            },
          },
        },
        {
          props: { state: "open" },
          style: {
            color: colors.green,
          },
        },
      ],
    },
  },
});

export default theme;
