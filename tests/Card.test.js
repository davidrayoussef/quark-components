import React from 'react';
import { shallow } from 'enzyme';
import Card from '../src/components/Card/Card';

describe('<Card />', () => {

  it('should render', () => {
    const wrapper = shallow(
      <Card />
    );
    expect(wrapper);
  });

  it('should render a Card name', () => {
    const wrapper = shallow(
      <Card name="David" />
    );
    expect( wrapper.text() ).toEqual('David');
  });

});
