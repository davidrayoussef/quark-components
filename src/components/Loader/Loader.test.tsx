import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { Loader } from './';

describe('Loader', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<Loader />);
  });
  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
