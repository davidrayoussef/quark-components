import React from 'react';
import { render, screen } from '@testing-library/react';

import { Menu } from './';

describe('Menu', () => {
  test('renders', () => {
    render(
      <Menu onMenuItemClick={jest.fn()}>
        <Menu.Item menuItem="Markets">
          <Menu.SubMenu>
            <a href="#">U.S. Markets</a>
            <a href="#">Global Markets</a>
          </Menu.SubMenu>
        </Menu.Item>
      </Menu>
    );
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});
