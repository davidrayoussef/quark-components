import React from 'react';

import { Icon } from '../../Icon';

import { MenuContext } from '../Menu';
import { MenuItemProps } from '../../../shared';

import style from './MenuItem.scss';

export const MenuItem: React.FC<MenuItemProps> = ({
  children,
  menuItem
}: MenuItemProps) => {
  return (
    <MenuContext.Consumer>
      {({ expanded, handleMenuItemClick }) => (
        <li
          onClick={handleMenuItemClick(menuItem)}
          className={`
            ${style.menuItem}
            ${expanded === menuItem ? style.expanded : ''}
          `}
        >
          <span>
            {menuItem}
            <Icon value="arrowDown" width="15" />
          </span>
          {React.Children.map(children, child => {
            return React.isValidElement(child)
              ? React.cloneElement(child, { menuItem })
              : child;
          })}
        </li>
      )}
    </MenuContext.Consumer>
  );
};
