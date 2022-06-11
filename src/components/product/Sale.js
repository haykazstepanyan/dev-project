import React from "react";
import { saleStyles } from "./styles";

const Sale = ({ discount }) => {
  const classes = saleStyles();
  return (
    <div className={classes.sale}>
      <span>- {discount} %</span>
    </div>
  );
};

export default Sale;
