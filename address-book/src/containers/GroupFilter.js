import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {  } from '../actions/index'

class GroupFilter extends Component {
    constructor(props) {
        super(props);
    }

    renderGroups() {
        return this.props.groups.map((group) => {
            return (
                <button className={`btn btn-${group.color}`} key={group.id}>{group.name}</button>
            );
        });
    }
    
    render() {     
        return (
            <div className="group-filter">
                <div className="btn-group">
                    {this.renderGroups()}
                </div>
            </div>
        );
    }
}

function mapStateToProps({ groups }) {
    return { groups }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ /* actions */ }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(GroupFilter);
