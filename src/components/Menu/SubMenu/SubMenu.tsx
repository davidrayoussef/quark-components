import React from 'react';

import { MenuContext } from '../Menu';
import { SubMenuProps } from '../../../shared';

import style from './SubMenu.css';

export const SubMenu: React.FC<SubMenuProps> = ({
  children,
  menuItem
}: SubMenuProps) => {
  return (
    <MenuContext.Consumer>
      {({ expanded }) => {
        return (
          <ul
            className={`
            ${style.subMenu} ${expanded === menuItem ? style.expanded : ''}
          `}
          >
            {children}
          </ul>
        );
      }}
    </MenuContext.Consumer>
  );
};
