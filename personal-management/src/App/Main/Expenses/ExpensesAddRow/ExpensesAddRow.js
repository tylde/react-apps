import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router'

import './ExpensesAddRow.scss'

import { } from './actions'

class ExpensesAddRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="expenses-add-row">
        Add expense
      </div>
    );
  }
}

function mapStateToProps({ /* store */ }) {
  return { /* store */ }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ /* actions */ }, dispatch);
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ExpensesAddRow));
