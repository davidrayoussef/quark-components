import React from 'react';
import { NavLink as Link } from 'react-router-dom';

import { Menu } from '@/components/Menu';

const onMenuItemClick = (event: React.MouseEvent) => {
  const target = event.target as HTMLElement;
  if (target.nodeName === 'A') {
    event.preventDefault();
  }
};

export const MenuExample = (): React.ReactElement => (
  <Menu onMenuItemClick={onMenuItemClick}>
    <Menu.Item menuItem="Markets">
      <Menu.SubMenu>
        <Link to="#">U.S. Markets</Link>
        <Link to="#">Global Markets</Link>
      </Menu.SubMenu>
    </Menu.Item>
    <Menu.Item menuItem="Investing">
      <Menu.SubMenu>
        <Link to="#">Stocks</Link>
        <Link to="#">Bonds</Link>
      </Menu.SubMenu>
    </Menu.Item>
    <Menu.Item menuItem="Account">
      <Menu.SubMenu>
        <Link to="#">Settings</Link>
        <Link to="#">Logout</Link>
      </Menu.SubMenu>
    </Menu.Item>
  </Menu>
);
