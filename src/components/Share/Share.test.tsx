import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { Share } from './';

describe('Share', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Share
        shares={['twitter', 'facebook', 'email']}
        url=""
        title={document.title}
        text="Quark Components: A library of React UI components."
      />
    );
  });
  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
