import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './MenuButton.scss';

export default class MenuButton extends Component {
  static propTypes = {
    color: PropTypes.string,
    exact: PropTypes.bool,
    to: PropTypes.string,
    text: PropTypes.string
  }
  static defaultProps = {
    color: '#ccc',
    exact: false
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavLink
        className="menu-button-container"
        exact={this.props.exact}
        to={this.props.to}
        activeClassName="navbar-active">
        <button style={{ borderColor: this.props.color }}>
          {this.props.text}
        </button>
        <hr />
      </NavLink>
    );

  }
}
