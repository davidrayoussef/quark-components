import React, { Component, Fragment } from 'react';
import { Modal } from '../../../components/Modal';
import { Button } from '../../../components/Button';

class AppExample extends Component {
  state = {
    open: false
  };

  handleClick = (): void => {
    this.setState({
      open: true
    });
  };

  handleClose = (): void => {
    this.setState({
      open: false
    });
  };

  render(): JSX.Element {
    return (
      <Fragment>
        <Button onClick={this.handleClick}>Open Modal</Button>
        <Modal
          title="Modal Title"
          isOpen={this.state.open}
          handleClose={this.handleClose}
        >
          <p>Modal Content</p>
        </Modal>
      </Fragment>
    );
  }
}

export const ModalExample = (): React.ReactElement => <AppExample />;
