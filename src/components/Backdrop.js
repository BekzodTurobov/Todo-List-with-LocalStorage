import React from "react";
import classes from "./Backdrop.module.css";

const Backdrop = ({ onCancel }) => {
  return <div className={classes.backdrop} onClick={onCancel}></div>;
};

export default Backdrop;
