import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ExpensesRow.scss';

export default class ExpensesRow extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
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
      <tr>
        <td className={this.props.type === '+' ? "table-row-type inc" : "table-row-type exp"}>
          {
            this.props.type === '+' ?
              <i className="icon-plus" /> :
              <i className="icon-minus" />
          }
        </td>
        <td>{this.props.date}</td>
        <td className="table-row-name">{this.props.name}</td>
        <td className="table-row-quantity">{this.props.quantity}</td>
        <td>{this.props.price}</td>
        <td>{amount}</td>
      </tr>
    );
  }
}
