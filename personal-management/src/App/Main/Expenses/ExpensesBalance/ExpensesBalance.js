import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router'

import './ExpensesBalance.scss'

import { } from './actions'

class ExpensesBalance extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="expenses-balance-container">
        <div className="expenses-balance">
          12 459.02
      </div>
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ExpensesBalance));
