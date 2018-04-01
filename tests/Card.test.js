import React from 'react';
import { shallow } from 'enzyme';
import Card from '../src/components/Card/Card';

describe('<Card />', () => {
  it('should render', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper);
  });
});
