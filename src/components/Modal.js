// import { useState } from "react";
import classes from "./Modal.module.css";

const Modal = ({ onCancel, onConfirm }) => {
  return (
    <>
      <div className={classes.modal}>
        <p>Are you sure?</p>
        <div className={classes.btnBox}>
          <button className="btn btn--alt" onClick={onCancel}>
            Cancel
          </button>
          <button className="btn" onClick={onConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
