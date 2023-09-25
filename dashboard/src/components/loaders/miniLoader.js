import React from "react";
import { CircularProgress } from "@mui/material";

export const MinLoader = ({ color, margin, style = {}, position, width, height }) => {
  const styles = {
      loaderStyle: {
      position: position ? position : "relative",
      color: color,
      width: width ? width : "20px",
      height: height ? height : "20px",
      margin: margin ? margin : "0 auto",
    },
  };
  return <CircularProgress style={{ ...styles.loaderStyle, ...style }} />;
};
