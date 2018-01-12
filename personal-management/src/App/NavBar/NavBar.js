import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import MenuButton from './MenuButton';

import './NavBar.scss';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar-container">
        <div className="logo-container"></div>

        <div className="menu-container">
          <MenuButton exact to="/" text="Dashboard" color="#87A740" />
          <MenuButton to="/projects" text="Projects" color="#E9A740" />
          <MenuButton to="/expenses" text="Expenses" color="#FF3458" />
          <MenuButton to="/todos" text="Todos" color="#27A4A5" />
          <MenuButton to="/appointments" text="Appointments" color="#DF7712" />
          <MenuButton to="/goals" text="Goals" color="#27A740" />
          <MenuButton to="/calendar" text="Calendar" />
          <MenuButton to="/settings" text="Settings" />

        </div>
      </div>
    );

  }
}
