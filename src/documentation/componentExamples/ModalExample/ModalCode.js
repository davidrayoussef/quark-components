import React from 'react';
import DocsCodeBlock from '../../../components/Docs/DocsCodeBlock';

const code = `
import React, { Component, Fragment } from 'react';
import Modal from '{yourpath}/Modal';
import Button from '{yourpath}/Button';

class ModalExample extends Component {
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
`;

const ModalCode = () => (
  <DocsCodeBlock>
    {code}
  </DocsCodeBlock>
);

export default ModalCode;
