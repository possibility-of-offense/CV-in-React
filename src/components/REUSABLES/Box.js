import { Fragment } from "react";
import classes from "./Box.module.css";

const Box = ({ children, bgColor, heading }) => {
  return (
    <div
      className={classes[`box-wrapper`]}
      style={{ backgroundColor: bgColor }}
    >
      <div className={classes[`box-wrapper__heading`]}>{heading}</div>
      <div className={classes[`box-wrapper__line`]}></div>
      <Fragment>{children}</Fragment>
    </div>
  );
};

export default Box;
