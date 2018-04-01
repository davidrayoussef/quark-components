import React from 'react';
import { shallow } from 'enzyme';
import HeaderBar from '../src/components/HeaderBar/HeaderBar';

describe('<HeaderBar />', () => {
  it('should render', () => {
    const wrapper = shallow(<HeaderBar />);
    expect(wrapper);
  });
});
