import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './ExampleContainer.scss';

import { /* actions */ } from './actions';

class ExampleContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="example-container">
        <div className="title">
          <span className="first-letter">R</span>eact <span className="first-letter">App</span>lication
        </div>
        <div className="description">{this.props.exampleText}</div>
      </div>
    );
  }
}

function mapStateToProps({ exampleText }) {
  return { exampleText };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ /* actions */ }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ExampleContainer);