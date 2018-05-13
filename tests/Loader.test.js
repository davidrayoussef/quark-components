import React from 'react';
import { shallow } from 'enzyme';
import Loader from '../src/components/Loader/Loader';

it('should render', () => {
  const wrapper = shallow(<Loader />);
  expect(wrapper);
});
