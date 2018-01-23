import React, { Component } from 'react';

import './Clock.scss';

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
  }

  componentDidMount() {
    this.timer = setInterval(
      () => { this.setState({ time: new Date() }); },
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    let hour = this.state.time.getHours();
    let minute = this.state.time.getMinutes();
    let second = this.state.time.getSeconds();

    let hourAngle = hour * 360 / 12;
    let minuteAngle = minute * 360 / 60;
    let secondAngle = second * 360 / 60;

    return (
      <div className="clock-container">
        <div className="clock-face" />
        <div className="clock-hour" style={{ transform: `rotate(${hourAngle - 90}deg)` }} />
        <div className="clock-minute" style={{ transform: `rotate(${minuteAngle - 90}deg)` }} />
        <div className="clock-second" style={{ transform: `rotate(${secondAngle - 90}deg)` }} />
        <div className="clock-dot" />
      </div>
    );
  }
}