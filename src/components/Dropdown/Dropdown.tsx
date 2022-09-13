import React from 'react';

import { Icon } from '../Icon';

import { DropdownProps } from '@/shared';
import { useDropdown } from './hooks';

import style from './Dropdown.scss';

export const Dropdown: React.FC<DropdownProps> = ({
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
      <button type="button" className={style.button} onClick={toggleMenu}>
        <span>{selectedLabel ?? defaultLabel}</span>
        <Icon
          value="arrowDown"
          color="#BBB"
          width="15"
          className={open ? style.flip : ''}
        />
      </button>
      <ul style={{ display: open ? 'block' : 'none' }}>
        {data.map(({ label, value }) => (
          <li
            key={value}
            className={label === selectedLabel ? style.selected : ''}
            onClick={handleMenuItemClick.bind(undefined, {
              label,
              value
            })}
          >
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
};
