import React, { Component } from 'react';

import Header from './Header';
import Todos from './Todos';

import './App.scss';

export default class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Header />
        <Todos />
      </div>
    );
  }
}