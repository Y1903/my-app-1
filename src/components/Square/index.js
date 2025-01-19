import React, { Component } from "react";
import "./style.css";
class Square extends Component {
  componentDidMount() {
    console.log("Square: Component did mount");
  }
  componentWillUnmount() {
    console.log("Square: Component did unmount");
  }

  constructor() {
    super();
  }
  render() {
    console.log("Square: Render component");

    return <div className="square"></div>;
  }
}

export default Square;
