import React, { Component } from 'react';

import './Todos.scss';

import TodoAdd from './TodoAdd';
import TodoFilter from './TodoFilter';
import TodoList from './TodoList';

export default class Todos extends Component {
  render() {
    return (
      <div className="todos-container">
        <TodoAdd />
        <TodoFilter />
        <TodoList />
      </div>
    );
  }
}