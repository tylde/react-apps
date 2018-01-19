import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './TodoAdd.scss';

import { /* actions */ } from './actions';

class TodoAdd extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="todo-add-container">

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

export default connect(mapStateToProps, mapDispatchToProps)(TodoAdd);