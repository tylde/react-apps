import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import MenuButton from './MenuButton';

import './NavBar.scss';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    }

    this.handleCollapseClick = this.handleCollapseClick.bind(this);
  }

  handleCollapseClick() {
    this.setState(prevState => ({ collapsed: !prevState.collapsed }));
  }

  render() {
    return (
      <div className="navbar-container" style={this.state.collapsed ? { width: '50px' } : { width: '250px' }}>
        <div className="logo-container">
          <button
            className="navbar-collapse-button"
            onClick={this.handleCollapseClick}>
            <i className={this.state.collapsed ? 'icon-plus' : 'icon-minus'} />
          </button>
        </div>

        <div className="menu-container">
          <MenuButton exact to="/" text="Dashboard" collapsed={this.state.collapsed} icon="icon-home" color="#87A740" />
          <MenuButton to="/projects" text="Projects" collapsed={this.state.collapsed} icon="icon-fire" color="#E9A740" />
          <MenuButton to="/expenses" text="Expenses" collapsed={this.state.collapsed} icon="icon-chart-bar" color="#FF3458" />
          <MenuButton to="/todos" text="Todos" collapsed={this.state.collapsed} icon="icon-list-alt" color="#27A4A5" />
          <MenuButton to="/appointments" text="Appointments" collapsed={this.state.collapsed} icon="icon-location" color="#DF7712" />
          <MenuButton to="/goals" text="Goals" collapsed={this.state.collapsed} icon="icon-bullseye" color="#27A740" />
          <MenuButton to="/ideas" text="Ideas" collapsed={this.state.collapsed} icon="icon-lightbulb" color="#27A740" />
          <MenuButton to="/calendar" text="Calendar" collapsed={this.state.collapsed} icon="icon-calendar-empty" />
          <MenuButton to="/settings" text="Settings" collapsed={this.state.collapsed} icon="icon-cog" />

        </div>
      </div>
    );

  }
}
