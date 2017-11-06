import React, { Component } from 'react';

import ContactsList from '../containers/ContactsList';
import ContactsDetail from '../containers/ContactsDetail';

export default class Contacts extends Component {
    render() {
        return(
            <div className="row">
                <ContactsList />
                <ContactsDetail />
            </div>
        );
    }
}