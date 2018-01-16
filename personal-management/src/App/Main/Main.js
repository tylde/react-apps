import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './Main.scss';

import Dashboard from './Dashboard';
import Expenses from './Expenses';
import NotFound from './NotFound';

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-container">
        <Switch>
          <Route exact path="/" component={Expenses} />
          <Route path="/expenses" component={Expenses} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}
