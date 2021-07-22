import React from 'react';

import { DocsCodeBlock } from '@/components/Docs';

const code = `
import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { Menu } from 'quark-components';

<Menu>
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
`;

export const MenuCode = (): React.ReactElement => (
  <DocsCodeBlock>{code}</DocsCodeBlock>
);
