import React from "react";
import { saleStyles } from "./styles";

const Sale = ({ number }) => {
  const classes = saleStyles();
  return (
    <div className={classes.sale}>
      <span>- {number} %</span>
    </div>
  );
};

export default Sale;
