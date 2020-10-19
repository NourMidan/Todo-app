import React from "react";
import classes from "../start-todo/StartTodo.module.css";

const done = (props) => (
  <>
    <div className={classes.container}>
      <h1 className={classes.tasks}>Tasks Finshed</h1>
      {props.children}
      <p>
        completion percentage:
        {(
          (props.done.length /
            (props.todo.length + props.doing.length + props.done.length)) *
          100
        ).toFixed(2)}
        %
      </p>
    </div>
  </>
);

export default done;
