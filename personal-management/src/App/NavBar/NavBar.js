import React, { Component } from 'react';

import styles from './NavBar.css';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className={styles.container}>NavBar</div>;
  }
}
