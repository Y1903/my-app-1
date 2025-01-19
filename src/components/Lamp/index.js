import React, { Component } from 'react';
import './style.css';

class Lamp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false, 
    };
  }

  toggleLamp = () => {
    this.setState((prevState) => ({ isOn: !prevState.isOn })); 
  };

  render() {
    const { isOn } = this.state;

    return (
      <div>
        <div className={`lamp ${isOn ? 'on' : 'off'}`}></div>
        <button onClick={this.toggleLamp}>
          {isOn ? 'On' : 'Off'}
        </button>
      </div>
    );
  }
}

export default Lamp;