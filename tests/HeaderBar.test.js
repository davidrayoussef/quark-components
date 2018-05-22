import React from 'react';
import { shallow } from 'enzyme';
import HeaderBar from '../src/components/HeaderBar/HeaderBar';

test('should render', () => {
  const wrapper = shallow(<HeaderBar />);
  expect(wrapper);
});

test('should render a title', () => {
  const wrapper = shallow(
    <HeaderBar title="HeaderBar Title" />
  );
  expect(wrapper.text()).toBe('HeaderBar Title');
});

test('snapshot', () => {
  const wrapper = shallow(
    <HeaderBar title="HeaderBar Title" />
  );
  expect(wrapper).toMatchSnapshot();
});
