import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router'
import _ from 'lodash';

import './ExpensesTable.scss'

import { } from './actions'

import ExpensesRow from './ExpensesRow';

class ExpensesTable extends Component {
  constructor(props) {
    super(props);
  }

  renderRows() {
    return _.map(this.props.expenses, (expense, index) => {
      return (
        <ExpensesRow key={expense.id} {...expense} />
      );
    });
  }

  render() {
    console.log(this.props.expenses)
    return (
      <table className="expenses-table">
        <thead>
          <tr>
            <th>Date</th>
            <th className="table-row-type">Type</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ expenses }) {
  return { expenses }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ /* actions */ }, dispatch);
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ExpensesTable));
