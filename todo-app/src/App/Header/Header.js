import React, { Component } from 'react';

import './Header.scss';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header-container">
        <span className="first-letter">T</span>odo <span className="first-letter">R</span>eact <span className="first-letter">App</span>lication
      </header>
    );
  }
}
