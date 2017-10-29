import React, { Component } from 'react';

import AddTodo from '../containers/AddTodo';
import TodoList from '../containers/TodoList';
import Filter from '../containers/Filter';

export default class App extends Component {
    render() {
        return(
            <div className="container">
                <div>
                    <AddTodo />
                    <hr className="bg-dark my-2" />
                    <div className="navbar p-0">
                        <Filter />
                    </div>
                    {<TodoList />}
                </div>
            </div>
        );
    }
}