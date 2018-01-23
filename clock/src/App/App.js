import React, { Component } from 'react';

import './App.scss';

import Clock from './Clock'

export default class App extends Component {
  render() {
    const clockProps = {

    }

    return (
      <div className="app-container">
        <Clock {...clockProps} />
      </div>
    );
  }
}