import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { Dropdown } from './';

describe('Dropdown', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Dropdown
        data={[
          { label: 'Stocks', value: 'stocks' },
          { label: 'Bonds', value: 'bonds' }
        ]}
        defaultLabel="Investment Types"
      />
    );
  });
  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
