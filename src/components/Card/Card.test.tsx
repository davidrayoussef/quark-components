import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { Card } from './';

describe('Card', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Card title="Card Title">
        <div className="card-content">Card Content</div>
      </Card>
    );
  });
  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });
  test('renders title', () => {
    expect(wrapper.find('.card-title').text()).toEqual('Card Title');
  });
  test('renders content', () => {
    expect(wrapper.find('.card-content').text()).toBe('Card Content');
  });
});
