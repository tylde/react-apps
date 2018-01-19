import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Todo.scss';

export default class Todo extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    done: PropTypes.bool.isRequired,
    priority: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onChangeState: PropTypes.func.isRequired
  }

  static defaultProps = {

  }

  constructor(props) {
    super(props);
  }

  render() {
    let priorityClass = classNames({
      'todo-priority': true,
      'priority-1': this.props.priority === 1,
      'priority-2': this.props.priority === 2,
      'priority-3': this.props.priority === 3,
      'priority-4': this.props.priority === 4,
      'priority-5': this.props.priority === 5,
    });

    // console.log(this.props);

    return (
      <div className="todo-container">
        <div className={priorityClass}></div>
        <div className="todo-isdone" onClick={() => this.props.onChangeState(this.props.id)}></div>
        <div className="todo-text">{this.props.text}</div>
        <div className="todo-delete"></div>
      </div>
    );
  }
}