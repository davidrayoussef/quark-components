import React, { Component } from 'react';

import { Button } from '../Button';
import { Icon } from '../Icon';

import { ButtonType, ModalProps } from '../../shared';

import style from './Modal.css';

export class Modal extends Component<ModalProps> {
  modalElement: React.RefObject<HTMLDivElement> = React.createRef();

  componentDidMount(): void {
    window.addEventListener('keyup', this.handleEsc);
  }

  componentWillUnMount(): void {
    window.removeEventListener('keyup', this.handleEsc);
  }

  handleEsc = (event: KeyboardEvent): void => {
    if (event.key === 'Escape') {
      this.props.handleClose();
    }
  };

  handleClickOutside = (event: React.MouseEvent<HTMLDivElement>): void => {
    if (!this.modalElement.current.contains(event.target as Node)) {
      this.props.handleClose();
    }
  };

  render(): JSX.Element {
    const { isOpen, title, children, handleClose } = this.props;
    return isOpen ? (
      <div className={style.overlay} onClick={this.handleClickOutside}>
        <div className={style.modal} ref={this.modalElement}>
          <Icon
            value="close"
            width="20px"
            color="rgba(0, 0, 0, .3)"
            className={style.xButton}
            onClick={handleClose}
          />
          <header>{title}</header>
          {children}
          <Button
            styleType={ButtonType.Secondary}
            style={{ width: 100, margin: 'auto' }}
            onClick={handleClose}
          >
            OK
          </Button>
        </div>
      </div>
    ) : null;
  }
}
