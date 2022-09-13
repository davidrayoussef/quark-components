import React from 'react';

import { MenuItem } from './MenuItem';
import { SubMenu } from './SubMenu';

import { MenuContext } from './MenuContext';
import { MenuProps, MenuState } from '@/shared';

import style from './Menu.scss';

export class Menu extends React.Component<MenuProps, MenuState> {
  state: Readonly<MenuState> = {
    expanded: undefined
  };

  static Item = MenuItem;
  static SubMenu = SubMenu;

  handleMenuItemClick =
    (menuItem: string) =>
    (event: React.MouseEvent): void => {
      const target = event.target as HTMLElement;
      this.props.onMenuItemClick(event);
      if (target.nodeName !== 'A') {
        this.setState({
          expanded: this.state.expanded === menuItem ? undefined : menuItem
        });
      }
    };

  render(): JSX.Element {
    return (
      <MenuContext.Provider
        value={{
          expanded: this.state.expanded,
          handleMenuItemClick: this.handleMenuItemClick
        }}
      >
        <nav className={style.menu}>{this.props.children}</nav>
      </MenuContext.Provider>
    );
  }
}
