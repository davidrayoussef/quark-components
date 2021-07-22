import React, { Component } from 'react';

import { Icon } from '../Icon';

import { DropdownProps, DropdownState } from '@/shared';

import style from './Dropdown.scss';

export class Dropdown extends Component<DropdownProps, DropdownState> {
  dropdownElement: React.RefObject<HTMLDivElement> = React.createRef();

  state: Readonly<DropdownState> = {
    isOpen: false,
    selectedItem: undefined
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

  handleMenuItemClick = ({
    label,
    value
  }: {
    label: string;
    value: string;
  }): void => {
    this.setState(
      {
        selectedItem: { label, value },
        isOpen: false
      },
      () => {
        this.props.onMenuItemClick?.({ label, value });
      }
    );
  };

  render(): JSX.Element {
    const { isOpen, selectedItem } = this.state;
    const { defaultLabel, data, width = '200px' } = this.props;
    const selectedLabel = selectedItem?.label;
    return (
      <div
        className={style.dropdown}
        style={{ width }}
        ref={this.dropdownElement}
      >
        <div className={style.label} onClick={this.toggleMenu}>
          <span>{selectedLabel ?? defaultLabel}</span>
          <Icon
            value="arrowDown"
            color="#BBB"
            width="15"
            className={isOpen ? style.flip : ''}
          />
        </div>
        <ul className={isOpen ? style.show : ''}>
          {data.map(({ label, value }) => (
            <button
              key={value}
              className={label === selectedLabel ? style.selected : ''}
              onClick={this.handleMenuItemClick.bind(undefined, {
                label,
                value
              })}
            >
              {label}
            </button>
          ))}
        </ul>
      </div>
    );
  }
}
