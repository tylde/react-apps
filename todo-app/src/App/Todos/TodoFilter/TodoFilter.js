import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './TodoFilter.scss';

import { /* actions */ } from './actions';

class TodoFilter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="todo-filter-container">

      </div>
    );
  }
}

function mapStateToProps({ /* store */ }) {
  return { /* store */ };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ /* actions */ }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilter);