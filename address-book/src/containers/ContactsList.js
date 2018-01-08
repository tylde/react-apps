import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ContactsItem from '../components/ContactsItem';

import {  } from '../actions/index'


class ContactsList extends Component {
    constructor(props) {
        super(props);
    }

    renderList() {
        return this.props.contacts.map((contact) => {
            return (
                <ContactsItem key={contact.id} contact={contact} groups={this.props.groups} />
            );
        });
    }
    
    render() {     
        return (
            <div className="col">
                <div className="contacts-list">
                    {this.renderList()}
                </div>
            </div>
        );
    }
}

function mapStateToProps({ contacts, groups }) {
    return { contacts, groups }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ /* actions */ }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
