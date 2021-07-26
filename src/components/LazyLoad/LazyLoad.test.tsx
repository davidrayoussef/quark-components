import React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import { LazyLoad } from './';

describe('LazyLoad', () => {
  let wrapper: ReactWrapper;
  beforeEach(() => {
    wrapper = mount(
      <LazyLoad>
        <img src="../../documentation/images/lazyload-1.jpg" alt="Image 1" />
        <img src="../../documentation/images/lazyload-2.jpg" alt="Image 2" />
      </LazyLoad>
    );
  });
  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
