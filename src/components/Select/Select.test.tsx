import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { Select } from './';

describe('Select', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Select name="gender" options={['male', 'female', 'nonbinary']} />
    );
  });
  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
