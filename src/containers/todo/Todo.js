import React, { Component } from "react";
import Starttodo from "../../components/start-todo/StartTodo";
import Doing from "../../components/start-doing/Doing";
import Done from "../../components/start-done/Done";
import Card from "../../components/start-todo/Card";
import classes from "./Todo.module.css";

class Todo extends Component {
  state = {
    display: "none",
    todo: [],
    doing: [],
    done: [],
  };
  showModal = () => {
    let displayCopy = this.state.display;
    displayCopy = "flex";
    this.setState({
      display: displayCopy,
    });
  };
  closeModal = () => {
    let displayCopy = this.state.display;
    displayCopy = "none";
    this.setState({
      display: displayCopy,
    });
  };

  deleteCard = (i) => {
    const todoCopy = [...this.state.todo];
    todoCopy.splice(i, 1);
    this.setState({ todo: todoCopy });
  };

  addCard = (e) => {
    e.preventDefault();
    if (
      (e.target.title.value.length > 0) &
      (e.target.details.value.length > 0)
    ) {
      let stateCopy = { ...this.state };
      let todoCopy = stateCopy.todo;
      todoCopy.push({
        title: e.target.title.value,
        details: e.target.details.value,
        id: 5,
      });

      this.setState(() => ({
        todo: todoCopy,
      }));
      console.log(todoCopy);
      console.log(this.state.todo);
      e.target.title.value = "";
      e.target.details.value = "";
      this.closeModal();
    }
  };
  startDoing = (i) => {
    const todoCopy = [...this.state.todo];
    const itemCopy = todoCopy[i];
    todoCopy.splice(i, 1);
    this.setState({ todo: todoCopy });

    const doingCopy = [...this.state.doing];
    doingCopy.push(itemCopy);
    this.setState(() => ({
      doing: doingCopy,
    }));
  };
  finishTask = (i) => {
    const doingCopy = [...this.state.doing];
    const itemCopy = doingCopy[i];
    doingCopy.splice(i, 1);
    this.setState({ doing: doingCopy });

    const doneCopy = [...this.state.done];
    doneCopy.push(itemCopy);
    this.setState(() => ({
      done: doneCopy,
    }));
  };

  render() {
    return (
      <>
        <div className={classes.container}>
          <div className={classes.todo}>
            <Starttodo
              close={this.closeModal}
              display={this.state.display}
              showModal={this.showModal}
              addCard={this.addCard}
            >
              {this.state.todo.map((card, i) => {
                return (
                  <Card
                    startDoing={() => this.startDoing(i)}
                    showBtn={true}
                    click={() => this.deleteCard(i)}
                    key={i}
                    details={card.details}
                    title={card.title}
                  />
                );
              })}
            </Starttodo>
          </div>
          <div className={classes.doing}>
            <Doing doing={this.state.doing}>
              {this.state.doing.map((card, i) => {
                return (
                  <Card
                    finishTask={() => this.finishTask(i)}
                    btns={true}
                    showBtn={false}
                    key={i}
                    details={card.details}
                    title={card.title}
                  />
                );
              })}
            </Doing>
          </div>
          <div className={classes.done}>
            <Done
              todo={this.state.todo}
              doing={this.state.doing}
              done={this.state.done}
            >
              {this.state.done.map((card, i) => {
                return (
                  <Card
                    btns={false}
                    key={i}
                    details={card.details}
                    title={card.title}
                  />
                );
              })}
            </Done>
          </div>
        </div>
      </>
    );
  }
}

export default Todo;
