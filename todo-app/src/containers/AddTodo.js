import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {  } from '../actions/index';

class AddTodo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="bg-dark my-2">
                <form className="">                          
                    <div className="input-group">
                        <input type="text" id="todo-input" className="form-control" />
                        <span className="input-group-btn">
                            <button type="sumbit" className="btn btn-primary">Submit</button>
                        </span>
                    </div>                    
                </form>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({  }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddTodo);