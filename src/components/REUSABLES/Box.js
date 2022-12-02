import { Fragment } from "react";
import classes from "./Box.module.css";

const Box = ({ children, bgColor, heading, additional }) => {
  let additionalStyles = additional || {};

  return (
    <div
      className={classes[`box-wrapper`]}
      style={{ backgroundColor: bgColor, ...additionalStyles }}
    >
      <div className={classes[`box-wrapper__heading`]}>{heading}</div>
      <div className={classes[`box-wrapper__line`]}></div>
      <Fragment>{children}</Fragment>
    </div>
  );
};

export default Box;
