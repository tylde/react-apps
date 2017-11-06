import React, { Component } from 'react';

export default class ContactsItem extends Component {
    constructor(props) {
        super(props);
    }

    renderGroups() {
        return this.props.contact.groups.map((group) => {
            return (
                <div key={group.id} className="contacts-item-groups-item" style={{backgroundColor: group.color}}></div>
            );
        });
    }

    render() {
        console.log(this.props.contact);
        return(
            <div className="contacts-item" onClick={() => console.log(this.props.contact.id)}>
                <div className="contacts-item-image"></div>
                <div className="contacts-item-name">
                    {this.props.contact.firstName} {this.props.contact.lastName}
                </div>
                <div className="contacts-item-groups">
                    {this.renderGroups()}
                </div>
                
            </div>
        );
    }
}