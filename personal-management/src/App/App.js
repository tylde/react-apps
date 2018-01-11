import React, { Component } from 'react';

import styles from './App.scss';

import NavBar from './NavBar';
import Main from './Main';

export default class App extends Component {
  render() {
    return (
      <div className="app-container">
        <NavBar />
        <Main />
      </div>
    );
  }
}
