import React, { Component } from 'react';

import ManageGroups from '../containers/ManageGroups';
import ContactForm from '../containers/ContactForm';

export default class Navbar extends Component {
    render() {
        return(
            <div className="navbar">
                <ManageGroups />
                <ContactForm />
            </div>
        );
    }
}