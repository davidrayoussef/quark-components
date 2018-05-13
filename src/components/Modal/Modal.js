import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import style from './Modal.css';

class Modal extends Component {
  state = {
    isOpen: false
  };

  static propTypes = {
    children: PropTypes.node,
    title: PropTypes.string
  };

  static getDerivedStateFromProps(nextProps, prevState, prevProps) {
    if (prevProps === null || nextProps.isOpen !== prevState.isOpen) {
      return {
        isOpen: nextProps.isOpen
      };
    }
    return null;
  }

  handleClose = () => {
    this.setState({
      isOpen: false
    });
  };

  handleEsc = (e) => {
    // console.log(e.which);
  };

  render() {
    if (this.state.isOpen) {
      return (
        <div className={style.overlay}>
          <div className={style.modal}>
            <header>{this.props.title}</header>
            {this.props.children}
            <Button
              type="secondary"
              style={{ width: 100, margin: 'auto' }}
              onClick={this.handleClose}
              onKeyUp={this.handleEsc}
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
