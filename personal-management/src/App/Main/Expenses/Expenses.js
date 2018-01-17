import React, { Component } from 'react';

import './Expenses.scss';

import ExpensesTable from './ExpensesTable';
import ExpensesAddRow from './ExpensesAddRow';
import ExpensesBalance from './ExpensesBalance';

export default class Expenses extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="expenses-container page">
        <div className="expenses-main">
          {/* <ExpensesBalance /> */}
          <ExpensesAddRow />
          <ExpensesTable />
        </div>
        {/* <div className="expenses-aside">
          <div className="expenses-graph-1">Graph 1</div>
          <div className="expenses-graph-2">Graph 2</div>
        </div> */}
      </div>
    );
  }
}
