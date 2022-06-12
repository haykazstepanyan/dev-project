import React from "react";
import { loadingStyles } from "./styles";

export default function Loading() {
  const classes = loadingStyles();
  return (
    <div className={classes.loadingContainer}>
      <div className={classes.loading}></div>
    </div>
  );
}
