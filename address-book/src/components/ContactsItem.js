import React, { Component } from 'react';

export default class ContactsItem extends Component {
    constructor(props) {
        super(props);
    }

    renderGroups() {
        return this.props.contact.groups.map((id) => {
            let color = undefined;
            for (let i = 0; i < this.props.groups.length; i++) {
                if (id === this.props.groups[i].id) color = this.props.groups[i].color;
            }
            return (
                <div key={id} className={"contacts-item-groups-item bg-" + color}></div>
            );
        });
    }

    render() {
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