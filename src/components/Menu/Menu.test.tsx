import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { Menu } from './';

describe('Menu', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Menu onMenuItemClick={jest.fn()}>
        <Menu.Item menuItem="Markets">
          <Menu.SubMenu>
            <a href="#">U.S. Markets</a>
            <a href="#">Global Markets</a>
          </Menu.SubMenu>
        </Menu.Item>
      </Menu>
    );
  });
  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
