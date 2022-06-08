import { createTheme } from "@mui/material/styles";
import { colors } from "../../constants/constants";

export const theme = createTheme({
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
          props: { color: "info" },
          style: {
            color: colors.black,
            background: "transparent",
          },
        },
        {
          props: { size: "small" },
          style: {
            fontSize: 12,
            fontWeight: 700,
            height: 34,
            lineHeight: 26,
            padding: "5px 20px",
            "&.rounded": {
              borderRadius: 20,
            },
          },
        },
        {
          props: { size: "large" },
          style: {
            height: 65,
            lineHeight: 65,
            padding: "0 45px",
            fontSize: 15,
            fontWeight: 500,
            "&.rounded": {
              borderRadius: 30,
            },
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
      ],
      // styleOverrides: {
      //   clickable: {
      //     color: "red",
      //   },
      // sizeSmall: {
      //   fontSize: 12,
      //   fontWeight: 700,
      //   height: 34,
      //   lineHeight: 26,
      //   padding: "5px 20px",
      //   "&.rounded": {
      //     borderRadius: 20,
      //   },
      // },
      //   sizeLarge: {
      //     height: 65,
      //     lineHeight: 65,
      //     padding: "0 45px",
      //     fontSize: 15,
      //     fontWeight: 500,
      //     "&.rounded": {
      //       borderRadius: 30,
      // },
      //   },
      //   // variant: {
      //   // clickable: {

      //   // text: {
      //   //   textTransform: "Capitalize",
      //   // },
      //   // },
      //   // },
      // },
    },
  },
});
