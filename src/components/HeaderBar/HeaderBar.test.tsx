import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { HeaderBar } from './';

describe('HeaderBar', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<HeaderBar title="HeaderBar Title" />);
  });
  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });
  test('renders title', () => {
    expect(wrapper.text()).toEqual('HeaderBar Title');
  });
});
