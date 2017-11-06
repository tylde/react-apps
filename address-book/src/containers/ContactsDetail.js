import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {  } from '../actions/index'

class ContactsDetail extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {     
        return (
            <div className="col">
                <div className="contacts-detail">
                    <div className="contacts-detail-image">
                        
                    </div>
                    <div className="contacts-detail-info">
                        
                    </div>
                    <div className="contacts-detail-manage">
                        <div className="btn-group">
                            <button className="btn btn-info">Edit</button>
                            <button className="btn btn-success">Groups</button>
                            <button className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ /* store */ }) {
    return { /* store */ }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ /* actions */ }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(ContactsDetail);
