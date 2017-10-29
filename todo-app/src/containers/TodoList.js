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
                <a href="#" className="list-group-item clearfix" key={todo.id}>
                    <span className="glyphicon glyphicon-file"></span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    <span className="pull-right">
                    <button className="btn btn-xs btn-info">CCS</button>
                    <button className="btn btn-xs btn-warning">
                        <span className="glyphicon glyphicon-trash"></span>
                    </button>
                    </span>
                </a>
            );
        });
    }

    render() {
        console.log('TODOS:', this.props.todos);
        return (
            <div className="bg-dark text-white my-2 p-2 rounded">
                <div className="list-group">
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