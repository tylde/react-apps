import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeGroupFilter } from '../actions/index'

class GroupFilter extends Component {
    constructor(props) {
        super(props);
    }

    renderGroups() {
        return this.props.groups.map((group) => {
            return (
                <button className={`btn btn-sm mx-1 btn${group.active ? '' : '-outline'}-${group.color}`} 
                key={group.id} onClick={() => this.props.changeGroupFilter(group.id)}>
                    {group.name}
                </button>
            );
        });
    }
    
    render() {     
        return (
            <div className="group-filter navbar">
                <div className="btn-group  m-auto">
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
    return bindActionCreators({ changeGroupFilter }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(GroupFilter);
