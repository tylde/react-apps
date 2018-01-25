import React, { Component } from 'react';

import './App.scss';

import DragableModal from './DraggableModal';
import Modal from './Modal';
import ModalOpen from './ModalOpen';

export default class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="button-container">
          <ModalOpen modalId="modal-1" />
        </div>

        <DragableModal dragBy="title">
          <Modal id="modal-1">
            <div className="test">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum tristique tempus. Integer sodales scelerisque enim sit amet euismod. Maecenas aliquam felis id nisi vulputate imperdiet. Vivamus elit elit, tempus molestie tincidunt ac, malesuada eu turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra.
            </div>
          </ Modal>
        </DragableModal>
      </div>
    );
  }
}