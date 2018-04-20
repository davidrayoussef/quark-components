import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import style from './Modal.css';

class Modal extends Component {
  state = {
    isOpen: false
  };

  static proptypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    content: PropTypes.string
  };

  static getDerivedStateFromProps(nextProps, prevState, prevProps) {
    if (prevProps === null || nextProps.isOpen !== prevState.isOpen) {
      return {
        isOpen: nextProps.isOpen
      };
    }
    return null;
  };

  handleClose = () => {
    this.setState({
      isOpen: false
    });
  };

  handleEsc = (e) => {
    console.log(e.which);
  };

  render() {
    return this.state.isOpen ? (
      <div className={style.overlay}>
        <div className={style.modal}>
          <header>{this.props.title}</header>
          {this.props.children}
          <div className={style.buttonContainer}>
            <span onClick={this.handleClose} onKeyUp={this.handleEsc}>
              <Button type="secondary">OK</Button>
            </span>
          </div>
        </div>
      </div>
    ) : null;
  }
};

export default Modal;
