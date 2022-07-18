import { createUseStyles } from "react-jss";

export const miniShoppingCartStyles = createUseStyles({
  cart_stack: {
    paddingRight: "10px",
    paddingBottom: "50px",
    paddingLeft: "10px",
  },
  cart_close: {
    borderBottom: "1px solid #e1e1e1",
    paddingBottom: "10px",
    paddingTop: "10px",
    backgroundColor: "#fff",
    width: "100%",
  },
  cart_text: {
    fontSize: "18px",
    textTransform: "capitalize",
    fontWeight: 400,
    marginBottom: 0,
  },
  cart_item: {
    overflow: "hidden !important",
    padding: "20px 0 !important",
    borderBottom: "1px solid #e1e1e1 !important",
    display: "flex !important",
    justifyContent: "space-between !important",
    alignItems: "flex-start !important",
  },
  cart_item_img: {
    width: "90px",
    marginRight: "10px",
    border: "1px solid transparent",
    textAlign: "center",
    "& img": {
      maxWidth: "100%",
      height: 60,
    },
  },
  cart_info: {
    width: "63%",
  },
  product_name: {
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "20px",
    display: "block",
    marginBottom: "6px",
  },
  cart_product_quantity_and_price: {
    fontSize: "12px",
    marginTop: "10px !important",
  },
  cart_totals_table: {
    padding: 5,
  },
  cart_totals_table_total: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "17px",
    fontSize: 13,
  },

  cart_cart_pages: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    paddingBottom: "50px",
  },
  cart_cart_pages_viewCart: {
    display: "flex",
    width: "100%",
  },
  cart_cart_pages_checkout: {
    marginTop: 20,
    display: "flex",
    width: "100%",
  },
});
