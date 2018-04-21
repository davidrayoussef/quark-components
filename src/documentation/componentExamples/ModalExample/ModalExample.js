import React, { Component, Fragment } from 'react';
import Modal from '../../../components/Modal/Modal';
import Button from '../../../components/Button/Button';

class AppExample extends Component {
  state = {
    open: false
  };

  handleClick = () => {
    this.setState({
      open: true
    });
  };

  render() {
    return (
      <Fragment>
        <Button onClick={this.handleClick}>Open Modal</Button>
        <Modal
          title="Modal Title"
          isOpen={this.state.open}
        >
          Modal Content
        </Modal>
      </Fragment>
    );
  }
}

export const ModalExample = () => (
  <AppExample />
);
