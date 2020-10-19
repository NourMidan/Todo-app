import React from "react";
import classes from "../start-todo/StartTodo.module.css";

const doing = (props) => (
  <>
    <div className={classes.container}>
      <h1 className={classes.tasks}>Tasks in progress</h1>
      {props.children}
      {!props.doing.length > 0 && (
        <h4>There are no tasks in progress currently </h4>
      )}
    </div>
  </>
);

export default doing;
