import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ExpensesRow.scss';

export default class ExpensesRow extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
  }

  static defaultProps = {
    quantity: 1,
    price: 0
  }

  constructor(props) {
    super(props);

  }

  render() {
    let amount = (this.props.quantity * this.props.price).toFixed(2);
    return (
      <tr className={this.props.type === '+' ? "table-row-inc" : "table-row-exp"}>
        <td>{this.props.date}</td>
        <td className="table-row-type">{this.props.type}</td>
        <td className="table-row-name">{this.props.name}</td>
        <td>{this.props.quantity}</td>
        <td>{this.props.price}</td>
        <td>{amount}</td>
      </tr>
    );
  }
}
