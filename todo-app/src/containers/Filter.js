import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {  } from '../actions/index';

class Filter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="nav-item justify-content-center">
                <div className="btn-group btn-group-sm">                      
                    <span className="input-group-btn">
                        <button type="sumbit" className="btn btn-sm btn-primary">Select all</button>
                    </span>
                    <span className="input-group-btn">
                        <button type="sumbit" className="btn btn-sm btn-success">Select completed</button>
                    </span>
                    <span className="input-group-btn">
                        <button type="sumbit" className="btn btn-sm btn-warning">Select incompeted</button>
                    </span>             
                </div>
            </div>
        );
    }
}

function mapStateToProps({  }) {
    return {  };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);