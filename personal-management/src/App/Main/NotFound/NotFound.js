import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './NotFound.scss';

export default class NotFound extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="notfound-container page">
        404 Page Not Found
        <br />
        <div><Link to="/">Back to dashboard</Link></div>
      </div>
    );
  }
}
