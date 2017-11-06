import React, { Component } from 'react';

export default class Navbar extends Component {
    render() {
        return(
            <div className="navbar">
                <button className="btn btn-info">Manage groups</button>
                <button className="btn btn-success">Add new contact</button>
            </div>
        );
    }
}