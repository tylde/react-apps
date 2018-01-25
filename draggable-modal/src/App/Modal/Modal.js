import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Modal.scss';

export default class Modal extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    id: PropTypes.string.isRequired
  }

  static defaultProps = {

  }

  constructor(props) {
    super(props);



    this.handleCloseClick = this.handleCloseClick.bind(this);
  }

  componentDidMount() {
    // document.getElementById(this.props.id).style.display = 'none';
  }

  handleCloseClick() {
    document.getElementById(this.props.id).style.display = 'none';
    document.getElementById(this.props.id).style.pointerEvents = 'none';
  }

  render() {
    return (
      <div className="modal-container" id={this.props.id}>
        <div className="header">
          <div className="title">Some window title</div>
          <div className="close" onClick={this.handleCloseClick}>
            <svg id='close-svg' viewBox='0 0 612 792' xmlns='http://www.w3.org/2000/svg'>
              <polygon className='st0' points='382.2,396.4 560.8,217.8 484,141 305.4,319.6 126.8,141 50,217.8 228.6,396.4 50,575 126.8,651.8 305.4,473.2 484,651.8 560.8,575 382.2,396.4'
              />
            </svg>
          </div>
        </div>
        <div className="body">{this.props.children}</div>
      </div>
    );
  }
}