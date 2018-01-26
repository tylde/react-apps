import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './ModalContainer.scss';

import DraggableModalFluxControlled from '../DraggableModalFluxControlled';
import ModalFlux from './ModalFlux';

import { closeModal, openModal } from './actions';

class ModalContainer extends Component {
  static propTypes = {
    openedModals: PropTypes.objectOf(PropTypes.shape({
      id: PropTypes.string,
      opened: PropTypes.bool
    }))
  }
  static defaultProps = {}

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="modal-c" >
        <button className="open-modal-btn" onClick={() => this.props.openModal('YV-101')}>
          Open Modal Using Flux
        </button>

        <DraggableModalFluxControlled
          dragBy="title"
          visible={this.props.openedModals['YV-101'].opened}>
          <ModalFlux id="YV-101" onClose={() => this.props.closeModal('YV-101')}>
            <div className="test">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum tristique tempus. Integer sodales scelerisque enim sit amet euismod. Maecenas aliquam felis id nisi vulputate imperdiet. Vivamus elit elit, tempus molestie tincidunt ac, malesuada eu turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra.
            </div>
          </ModalFlux>
        </DraggableModalFluxControlled>
      </div>
    );
  }
}

function mapStateToProps({ openedModals }) {
  return { openedModals };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ closeModal, openModal }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);