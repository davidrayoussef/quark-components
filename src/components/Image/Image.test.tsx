import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { Image } from './';

describe('Image', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<Image src="path/to/img.jpg" alt="Image description" />);
  });
  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
