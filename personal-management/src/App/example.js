import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { } from '../actions/index'

class Example extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Example
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
export default connect(mapStateToProps, mapDispatchToProps)(Example);
