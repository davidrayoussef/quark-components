import React from 'react';

import { Icon } from '../Icon';

import { DropdownProps } from '@/shared';
import { useDropdown } from './hooks';

import style from './Dropdown.scss';

export const Dropdown: React.VFC<DropdownProps> = ({
  data,
  defaultLabel,
  width = '200px',
  onMenuItemClick
}: DropdownProps) => {
  const {
    dropdownElement,
    open,
    selectedItem,
    handleMenuItemClick,
    toggleMenu
  } = useDropdown(onMenuItemClick);
  const selectedLabel = selectedItem?.label;
  return (
    <div className={style.dropdown} style={{ width }} ref={dropdownElement}>
      <div className={style.label} onClick={toggleMenu}>
        <span>{selectedLabel ?? defaultLabel}</span>
        <Icon
          value="arrowDown"
          color="#BBB"
          width="15"
          className={open ? style.flip : ''}
        />
      </div>
      <ul className={open ? style.show : ''}>
        {data.map(({ label, value }) => (
          <button
            key={value}
            className={label === selectedLabel ? style.selected : ''}
            onClick={handleMenuItemClick.bind(undefined, {
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
};
