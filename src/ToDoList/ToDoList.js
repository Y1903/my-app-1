import React, { Component } from "react";
import Form from "./Form/Form";
import List from "./List/List";
import "./ToDoList.css"


class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }

  addTask = (task) => {
    if (task.trim()) {
      this.setState((prevState) => ({
        tasks: [
          ...prevState.tasks,
          { id: Date.now(), text: task, completed: false },
        ],
      }));
    }
  };

  removeTask = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== id),
    }));
  };

  toggleTaskCompletion = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    }));
  };

  render() {
    return (
      <div className="todo-container">
        <h1>To-Do List </h1>
        <Form addTask={this.addTask} />
        <List
          tasks={this.state.tasks}
          removeTask={this.removeTask}
          toggleTaskCompletion={this.toggleTaskCompletion}
        />
      </div>
    );
  }
}

export default ToDoList;
