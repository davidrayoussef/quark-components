import React from 'react';
import { shallow } from 'enzyme';
import NavMenu from '../src/components/NavMenu/NavMenu';

describe('<NavMenu />', () => {
  it('should render', () => {
    const wrapper = shallow(<NavMenu data={[{ name: 'menuItem1' }]}/>);
    expect(wrapper);
  });
});
