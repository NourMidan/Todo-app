import React from "react";
import classes from "./Cardmodal.module.css";

const cardModal = (props) => {
  return (
    <div style={{ display: `${props.display}` }} className={classes.modal}>
      <form className={classes.container} onSubmit={props.addCard}>
        <span onClick={props.close} className={classes.close}>
          close &#10006;
        </span>
        <span>
          Title :
          <input name="title" type="text" placeholder="Enter Title"></input>
        </span>
        <span>
          Details :
          <input name="details" type="text" placeholder="Enter Details"></input>
        </span>
        <button type="submit">Confirm</button>
      </form>
    </div>
  );
};

export default cardModal;
