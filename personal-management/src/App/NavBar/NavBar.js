import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.scss';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar-container">

        <NavLink exact to="/" activeClassName="navbar-active">
          <button>Dashboard</button>
        </NavLink>
        <NavLink to="/expenses" activeClassName="navbar-active">
          <button>Expenses</button>
        </NavLink>
        <NavLink to="/todos" activeClassName="navbar-active">
          <button>Todos</button>
        </NavLink>
        <NavLink to="/calendar" activeClassName="navbar-active">
          <button>Calendar</button>
        </NavLink>

      </div>
    );

  }
}
