import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { Icon } from './';

describe('Icon', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<Icon value="email" />);
  });
  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });
  test('renders svg', () => {
    expect(wrapper.find('svg').exists()).toBe(true);
  });
});
