import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {  } from '../actions/index'

class ManageGroups extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {     
        return (
            <div className="">
                <button className="btn btn-sm btn-info">Manage groups</button>
            </div>
        );
    }
}

function mapStateToProps({ groups }) {
    return { groups }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({  }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(ManageGroups);
