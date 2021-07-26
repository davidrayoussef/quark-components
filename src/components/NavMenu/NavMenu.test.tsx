import React from 'react';
import { shallow, mount, ShallowWrapper } from 'enzyme';

import { NavMenu } from './';
import { withMobileMenu } from './withMobileMenu';

Object.defineProperty(window, 'matchMedia', {
  value: jest.fn(() => {
    return { matches: true };
  })
});

const data = [
  { name: 'nave menu item 1' },
  { name: 'nave menu item 2' },
  { name: 'nave menu item 3' }
];

describe('NavMenu', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<NavMenu data={data} menuTitle="NavMenu Title" />);
  });
  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });
  test('renders uppercase title', () => {
    expect(wrapper.find('h2').text()).toEqual('NAVMENU TITLE');
  });
  test('renders 3 anchor tags', () => {
    expect(wrapper.find('a').length).toEqual(3);
  });
  test('renders svg (hamburger icon) if withMobileMenu HOC is used', () => {
    const NavMenuWithMobileMenu = withMobileMenu(NavMenu);
    const wrapper = mount(<NavMenuWithMobileMenu data={data} />);
    expect(wrapper.find('svg').length).toEqual(1);
  });
});
