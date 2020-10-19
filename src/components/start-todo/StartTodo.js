import React from "react";
import Cardmodal from "./Cardmodal";
import classes from "./StartTodo.module.css";

const starttodo = (props) => (
  <>
    <div className={classes.container}>
      <h1 className={classes.tasks}>Tasks Todo</h1>
      {props.children}
      <button className={classes.add} onClick={props.showModal}>
        Add a card
      </button>
    </div>
    <Cardmodal
      addCard={props.addCard}
      close={props.close}
      display={props.display}
    ></Cardmodal>
  </>
);

export default starttodo;
