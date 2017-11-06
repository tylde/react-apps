import React, { Component } from 'react';

import Navbar from './Navbar';
import Contacts from './Contacts';
import GroupFilter from '../containers/GroupFilter';

export default class App extends Component {
    render() {
        return(
            <div className="app-container">
                <Navbar />
                <GroupFilter />
                <Contacts />
            </div>
        );
    }
}