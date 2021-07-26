import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { Grid } from './';

describe('Grid', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Grid>
        <div></div>
        <div></div>
        <div></div>
      </Grid>
    );
  });
  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
