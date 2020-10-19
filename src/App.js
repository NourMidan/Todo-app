import React from "react";
import Todo from "./containers/todo/Todo";
import Layout from "./components/layout/Layout";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.app}>
      <Layout></Layout>
      <Todo></Todo>
    </div>
  );
}

export default App;
