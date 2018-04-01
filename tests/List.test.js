import React from 'react';
import { shallow } from 'enzyme';
import List from '../src/components/List/List';

describe('<List />', () => {
  it('should render', () => {
    const wrapper = shallow(<List data={[{ name: 'listItem1' }]}/>);
    expect(wrapper);
  });
});
