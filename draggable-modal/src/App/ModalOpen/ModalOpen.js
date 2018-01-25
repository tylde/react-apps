import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ModalOpen.scss';

export default class ModalOpen extends Component {
  static propTypes = {
    text: PropTypes.string,
    modalId: PropTypes.string.isRequired
  }

  static defaultProps = {
    text: 'Open'
  }

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    document.getElementById(this.props.modalId).style.display = 'flex';
    document.getElementById(this.props.modalId).style.pointerEvents = 'initial';
  }

  render() {
    return (
      <button className="open-modal-btn" onClick={this.handleClick}>
        {this.props.text}
      </button>
    );
  }
}