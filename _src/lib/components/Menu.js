'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import Modal from 'react-modal';
import bars from './images/bars.svg';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#menu')

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}><img src={bars} className="icon" alt="menu" /></button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Menu"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>Pages </h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
          <form id="menuForm" className="form-group">
            <input />
            <button className="btn btn--primary">tab navigation</button>
            <button className="btn btn--primary">stays</button>
            <button className="btn btn--primary">inside</button>
            <button className="btn btn--primary">the modal</button>
          </form>
        </Modal>
      </div>
    );
  }
}

ReactDom.render(<App/>, document.getElementById('menu'));
