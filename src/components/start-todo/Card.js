import React from "react";
import classes from "./StartTodo.module.css";

const card = (props) => {
  return (
    <div className={classes.card}>
      <h2 className={classes.title}>{props.title}</h2>
      <h3 className={classes.detail}>
        Details : <br></br>
        {props.details}
      </h3>
      <div className={classes.btns}>
        {props.showBtn ? (
          <div>
            <button onClick={props.click}>Remove</button>
            <button onClick={props.startDoing}>Start Doing </button>
          </div>
        ) : null}

        {!props.showBtn & props.btns ? (
          <div>
            <button onClick={props.finishTask}>Finish</button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default card;
