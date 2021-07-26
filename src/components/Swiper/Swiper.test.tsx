import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { Swiper } from './';

describe('Swiper', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Swiper>
        <img src="images/image-1.jpg" alt="Image 1" />
        <img src="images/image-2.jpg" alt="Image 2" />
      </Swiper>
    );
  });
  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
