import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { CheckBox } from './';

describe('CheckBox', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(
      <CheckBox
        name="favorites"
        label="FAVORITE FRAMEWORKS"
        options={['React', 'Angular', 'Vue']}
        onChange={jest.fn()}
      />
    );
  });
  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
