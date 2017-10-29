import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {  } from '../actions/index';

class TodoList extends Component {
    constructor(props) {
        super(props);
    }

    renderList() {
        return this.props.todos.map((todo) => {
            return (
                <div key={todo.id} className={"todo-list-item"  + (todo.isCompleted ? " " : " ")}>
                    <div className="todo-btn-group">    
                        <button className={"todo-btn" + (todo.isCompleted ? " todo-success text-white" : " ")}><i className={todo.isCompleted ? "icon-ok" : "icon-cancel"} /></button>
                        <div className="item">
                            {todo.text}
                        </div>
                        <button className="todo-btn"><i className="icon-pencil" /></button>
                        <button className="todo-btn"><i className="icon-trash" /></button>
                    </div>
                </div>
            );
        });
    }

    render() {
        console.log('TODOS:', this.props.todos);
        return (
            <div className="bg-dark text-white my-2 p-2 rounded">
                <div className="todo-list-group">
                    {this.renderList()}
                </div>
            </div>
        );
    }
}

function mapStateToProps({ todos }) {
    return { todos };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);