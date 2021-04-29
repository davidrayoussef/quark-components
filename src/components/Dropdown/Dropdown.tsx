import React, { Component } from 'react';

import { Icon } from '../Icon';

import { DropdownProps, DropdownState } from '../../shared';

import style from './Dropdown.css';

export class Dropdown extends Component<DropdownProps, DropdownState> {
  dropdownElement: React.RefObject<HTMLDivElement> = React.createRef();

  state: Readonly<DropdownState> = {
    isOpen: false
  };

  static defaultProps = {
    linksDisabled: false
  };

  componentDidMount(): void {
    window.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount(): void {
    window.removeEventListener('click', this.handleClickOutside);
  }

  toggleMenu = (): void => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  handleClickOutside = (event: MouseEvent): void => {
    if (
      this.state.isOpen &&
      !this.dropdownElement.current.contains(event.target as Node)
    ) {
      this.toggleMenu();
    }
  };

  handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>): void => {
    if (this.props.linksDisabled) {
      event.preventDefault();
    }
  };

  render(): JSX.Element {
    const { isOpen } = this.state;
    const { label, data } = this.props;
    const menuItems = data.map(({ name, url, linkDisabled }) => (
      <a
        key={name}
        href={url && !linkDisabled ? url : '#'}
        onClick={this.handleLinkClick}
      >
        {name}
      </a>
    ));

    return (
      <div className={style.dropdown} ref={this.dropdownElement}>
        <div className={style.label} onClick={this.toggleMenu}>
          <span>{label}</span>
          <Icon value="arrowDown" color="#BBB" width="15" />
        </div>
        <ul className={isOpen ? style.show : ''}>{menuItems}</ul>
      </div>
    );
  }
}
