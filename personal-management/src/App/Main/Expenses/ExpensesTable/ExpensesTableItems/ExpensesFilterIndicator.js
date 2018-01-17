import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ExpensesFilterIndicator.scss';

export default class ExpensesFilterIndicator extends Component {
  static propTypes = {
    byIncrement: PropTypes.bool,
    byDecrement: PropTypes.bool
  }

  static defaultProps = {
    byIncrement: false,
    byDecrement: false
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}
