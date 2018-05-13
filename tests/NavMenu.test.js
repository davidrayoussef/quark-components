import React from 'react';
import { shallow, mount } from 'enzyme';
import NavMenu from '../src/components/NavMenu/NavMenu';
import { withMobileMenu } from '../src/components/NavMenu/withMobileMenu';

const data = [
  { name: 'nave menu item 1' },
  { name: 'nave menu item 2' },
  { name: 'nave menu item 3' }
]

test('should render', () => {
  const wrapper = shallow(
    <NavMenu data={[]} />
  );
  expect(wrapper);
});

test('should render an uppercase title', () => {
  const wrapper = shallow(
    <NavMenu data={[]} menuTitle="NavMenu Title" />
  );
  expect(wrapper.find('h2').text()).toBe('NAVMENU TITLE');
});

test('should render 3 anchor tags', () => {
  const wrapper = shallow(
    <NavMenu data={data} />
  );
  expect(wrapper.find('a').length).toBe(3);
});

test('should render hashes for anchor tags if linkDisabled set to true', () => {
  const wrapper = mount(
    <NavMenu data={data} linkDisabled={true} />
  );
  expect(wrapper.find('a[href="#"]').length).toBe(3);
});

test('should render svg (hamburger icon) if withMobileMenu HOC is used', () => {
  const NavMenuWithMobileMenu = withMobileMenu(NavMenu);
  const wrapper = mount(
    <NavMenuWithMobileMenu data={data} />
  );
  expect(wrapper.find('svg').length).toBe(1);
});
