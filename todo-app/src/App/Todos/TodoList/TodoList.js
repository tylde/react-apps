import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './TodoList.scss';

import Todo from './Todo';

import { testTodo } from './actions';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  renderTodos() {
    return this.props.todos.byId.map((id) => {
      let properties = this.props.todos.byHash[id];
      return <Todo key={id} {...properties} onDelete={() => { }} onChangeState={this.props.testTodo} />
    });
  }

  render() {
    return (
      <div className="todo-list-container">
        <div className="todo-list-header">
          {this.renderTodos()}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ todos }) {
  return { todos };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ testTodo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);