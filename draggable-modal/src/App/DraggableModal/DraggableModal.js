import React, { Component } from 'react';
import PropTypes from 'prop-types';



export default class DraggableModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      children: null,
      width: 0,
      height: 0,
      visible: false,
      isDragging: false,
      x: 0,
      y: 0,
      lastMouseX: 0,
      lastMouseY: 0
    }


    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
  }

  static propTypes = {
    children: PropTypes.element.isRequired,
    dragBy: PropTypes.string
  }

  static defaultProps = {
    dragBy: ''
  }

  componentDidMount() {
    const children = document.getElementById(this.props.children.props.id);
    console.log(children.offsetWidth, children.offsetHeight)

    const x = (window.innerWidth - children.offsetWidth) / 2 + window.scrollX;
    const y = (window.innerHeight - children.offsetHeight) / 2 + window.scrollY;

    this.setState({
      children: children,
      width: children.offsetWidth,
      height: children.offsetHeight,
      x,
      y
    });
    children.style.display = 'none';
  }

  onMouseDown(event) {
    let allowDrag = false;
    if (this.props.dragBy !== '') {
      if (event.target.id === this.props.dragBy || event.target.classList.contains(this.props.dragBy)) allowDrag = true;
      else allowDrag = false;
    }
    else allowDrag = true;

    if (event.button === 0 && allowDrag) this.setState({ isDragging: true });
    this.setState({
      lastMouseX: event.clientX,
      lastMouseY: event.clientY
    });

  }
  onMouseUp() {
    if (this.state.isDragging === true) this.setState({ isDragging: false });
  }
  onMouseMove(event) {
    if (this.state.isDragging) {
      event.persist()

      this.setState((prevState) => {
        return {
          x: prevState.x + (event.clientX - prevState.lastMouseX),
          y: prevState.y + (event.clientY - prevState.lastMouseY),
          lastMouseX: event.clientX,
          lastMouseY: event.clientY
        }
      });
    }

  }


  render() {
    // console.log(this.props.children)

    const modalStyle = {
      position: 'absolute',
      width: this.state.width,
      height: this.state.height,
      top: this.state.y,
      left: this.state.x,
      pointerEvents: 'none'
    }


    return (
      <div className="dragable-modal-container"
        style={modalStyle}
        onMouseDown={this.onMouseDown}
        onMouseMove={this.onMouseMove}
        onMouseUp={this.onMouseUp}
      >
        {this.props.children}
      </div>
    );
  }
}