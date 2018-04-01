import React from 'react';
import { shallow } from 'enzyme';
import Docs from '../src/components/Docs/Docs';

describe('<Docs />', () => {
  it('should render', () => {
    const wrapper = shallow(<Docs />);
    expect(wrapper);
  });
});
