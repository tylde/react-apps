import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';

import Dashboard from './Dashboard';
import Expenses from './Expenses';

import styles from './Main.css';

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.container}>
        Main:
        <Switch>
          <Route path="/" component={Dashboard} />
          <Route path="/expenses" component={Expenses} />
        </Switch>
      </div>
    );
  }
}
