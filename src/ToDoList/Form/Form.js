import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
    };
  }

  changeHandler = (event) => {
    this.setState({ task: event.target.value });
  };

  submitHandler = (event) => {
    event.preventDefault();

    this.props.addTask(this.state.task);
    this.setState({ task: "" });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          name="todo"
          placeholder="Add a new task"
          value={this.state.task}
          onChange={this.changeHandler}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default Form;
