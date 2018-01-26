import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DraggableModal extends Component {
  static propTypes = {
    canLeaveBody: PropTypes.bool,
    children: PropTypes.element.isRequired,
    dragBy: PropTypes.string
  }

  static defaultProps = {
    dragBy: '',
    canLeaveBody: false
  }

  constructor(props) {
    super(props);

    this.state = {
      children: null,
      width: 0,
      height: 0,
      visible: false,
      isDragging: false,
      position: { x: 0, y: 0 },
      relative: { x: 0, y: 0 }
    }

    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
  }

  componentDidMount() {
    const children = document.getElementById(this.props.children.props.id);
    const x = (window.innerWidth - children.offsetWidth) / 2 + window.scrollX;
    const y = (window.innerHeight - children.offsetHeight) / 2 + window.scrollY;

    this.setState({
      children: children,
      width: children.offsetWidth,
      height: children.offsetHeight,
      position: { x, y }
    });
    children.style.display = 'none';
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.isDragging && !prevState.isDragging) {
      document.addEventListener('mousemove', this.onMouseMove)
      document.addEventListener('mouseup', this.onMouseUp)
    }
    else if (!this.state.isDragging && prevState.isDragging) {
      document.removeEventListener('mousemove', this.onMouseMove)
      document.removeEventListener('mouseup', this.onMouseUp)
    }
  }

  onMouseDown(event) {
    let allowDrag = false;
    if (this.props.dragBy !== '') {
      if (event.target.id === this.props.dragBy || event.target.classList.contains(this.props.dragBy)) allowDrag = true;
      else allowDrag = false;
    }
    else allowDrag = true;

    if (event.button === 0 && allowDrag) {
      event.persist();
      this.setState((prevState => {
        return {
          isDragging: true,
          relative: {
            x: event.pageX - this.state.position.x,
            y: event.pageY - this.state.position.y
          }
        }
      }));
    }
    event.stopPropagation();
  }

  onMouseUp(event) {
    if (this.state.isDragging === true) this.setState({ isDragging: false });
    event.stopPropagation();
  }

  onMouseMove(event) {
    if (this.state.isDragging) {
      this.setState((prevState) => {
        let x = event.pageX - prevState.relative.x;
        let y = event.pageY - prevState.relative.y;

        if (!this.props.canLeaveBody) {
          if (x < 0) x = 0;
          else if (x > window.innerWidth - prevState.width) x = window.innerWidth - prevState.width

          if (y < 0) y = 0;
          else if (y > window.innerHeight - prevState.height) y = window.innerHeight - prevState.height
        }

        return {
          position: { x, y }
        }
      });
    }
    event.stopPropagation();
  }

  render() {
    const modalStyle = {
      position: 'absolute',
      width: this.state.width,
      height: this.state.height,
      top: this.state.position.y,
      left: this.state.position.x,
      pointerEvents: 'none'
    }
    return (
      <div className="dragable-modal-container" style={modalStyle} onMouseDown={this.onMouseDown}>
        {this.props.children}
      </div>
    );
  }
}