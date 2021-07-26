import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { Input } from './';

describe('Input', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Input
        name="username"
        label="USERNAME"
        placeholder="username"
        value="value"
        errorMessage="Username is incorrect."
        isValid
        onChange={jest.fn()}
        onBlur={jest.fn()}
      />
    );
  });
  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
