import React from 'react';
import { shallow } from 'enzyme';
import Grid from '../src/components/Grid';

test('should render', () => {
  const wrapper = shallow(
    <Grid>
      <div></div>
      <div></div>
      <div></div>
    </Grid>
  );
  expect(wrapper);
});

test('should add class .fluid if fluid prop set', () => {
  const wrapper = shallow(
    <Grid fluid>
      <div></div>
      <div></div>
      <div></div>
    </Grid>
  );
  expect(wrapper.find('.fluid').length).toBe(1);
});

test('should render correct amount of children', () => {
  const wrapper = shallow(
    <Grid>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </Grid>
  );
  expect(wrapper.find('li').length).toBe(6);
});

test('snapshot', () => {
  const wrapper = shallow(
    <Grid>
      <div></div>
      <div></div>
      <div></div>
    </Grid>
  );
  expect(wrapper).toMatchSnapshot();
});
