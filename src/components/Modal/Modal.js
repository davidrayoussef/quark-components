import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import style from './Modal.css';

class Modal extends Component {
  modalElement = React.createRef();

  static propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    isOpen: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired
  };

  componentDidMount() {
    window.addEventListener('keyup', this.handleEsc);
  }

  componentWillUnMount() {
    window.removeEventListener('keyup', this.handleEsc);
  }

  handleEsc = (e) => {
    if (e.which === 27) {
      this.props.handleClose();
    }
  };

  handleClickOutside = (e) => {
    if ( !this.modalElement.current.contains(e.target) ) {
      this.props.handleClose();
    }
  };

  render() {
    const { isOpen, title, children, handleClose } = this.props;

    if (isOpen) {
      return (
        <div className={style.overlay} onClick={this.handleClickOutside}>
          <div className={style.modal} ref={this.modalElement}>
            <header>{title}</header>
            {children}
            <Button
              type="secondary"
              style={{ width: 100, margin: 'auto' }}
              onClick={handleClose}
            >
              OK
            </Button>
          </div>
        </div>
      );
    }
    return null;
  }
}

export default Modal;
