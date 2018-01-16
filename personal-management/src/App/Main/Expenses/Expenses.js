import React, { Component } from 'react';

import './Expenses.scss';

import ExpensesTable from './ExpensesTable';

export default class Expenses extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="expenses-container page">
        <div className="expenses-main">
          <div className="expenses-add">Add</div>
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
