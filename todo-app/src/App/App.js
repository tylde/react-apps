import React, { Component } from 'react';

import ExampleContainer from './ExampleContainer';

import './App.scss';

export default class App extends Component {
  render() {
    return (
      <div className="app-container">
        <ExampleContainer />
      </div>
    );
  }
}