import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { AutoComplete } from './';

describe('AutoComplete', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(
      <AutoComplete
        suggestions={['Suggestion 1', 'Suggestion 2', 'Suggestion 3']}
      />
    );
  });
  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
