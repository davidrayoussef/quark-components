import React from 'react';
import DocsCodeBlock from '../../../components/Docs/DocsCodeBlock';

const code = `
import React, { Component, Fragment } from 'react';
import Modal from 'quark-components/Modal';
import Button from 'quark-components/Button';

class AppExample extends Component {
  state = {
    open: false
  };

  handleClick = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
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
`;

export const ModalCode = () => (
  <DocsCodeBlock>
    {code}
  </DocsCodeBlock>
);
