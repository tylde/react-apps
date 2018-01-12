import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './MenuButton.scss';

export default class MenuButton extends Component {
  static propTypes = {
    collapsed: PropTypes.bool.isRequired,
    color: PropTypes.string,
    exact: PropTypes.bool,
    icon: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
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
          <span className="menu-button-icon">
            <i className={this.props.icon} />
          </span>

          <span className={this.props.collapsed ? 'menu-button-text collapsed' : 'menu-button-text'}>{this.props.text}</span>
        </button>
        <hr />
      </NavLink >
    );

  }
}
