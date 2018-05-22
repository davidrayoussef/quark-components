import React from 'react';
import { shallow } from 'enzyme';
import Icon from '../src/components/Icon/Icon';

test('should render', () => {
  const wrapper = shallow(
    <Icon value="email" />
  );
  expect(wrapper);
});

test('should render an svg', () => {
  const wrapper = shallow(
    <Icon value="twitter" />
  );
  expect(wrapper.find('svg').length).toBe(1);
});

test('snapshot', () => {
  const wrapper = shallow(
    <Icon value="email" />
  );
  expect(wrapper).toMatchSnapshot();
});
