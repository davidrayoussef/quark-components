import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { Tooltip } from './';

describe('Tooltip', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<Tooltip message="Error message." />);
  });
  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
