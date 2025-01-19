import React, { Component } from "react";

class Dialog extends Component {
  render() {
    const { userName } = this.props;
    return (
      <div>
        <h2>Hello, {userName} !</h2>
      </div>
    );
  }
}

export default Dialog;
