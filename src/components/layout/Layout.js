import React from "react";
import classes from "./Layout.module.css";


const layout = (props) => {
  return (
    <>
      <h1 className={classes.Layout}>Todo App</h1>
      {props.children}
    </>
  );
};

export default layout;
