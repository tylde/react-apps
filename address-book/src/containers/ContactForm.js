import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {  } from '../actions/index'

class ContactForm extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {     
        return (
            <div className="">
                <button className="btn btn-sm btn-success">Add new contact</button>
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
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
