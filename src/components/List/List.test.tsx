import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { List } from './';

describe('List', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(
      <List
        title="List Title"
        data={['list item 1', 'list item 2', 'list item 3']}
      />
    );
  });
  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });
  test('renders title', () => {
    expect(wrapper.find('.title').text()).toEqual('List Title');
  });
  test('renders 3 list items', () => {
    expect(wrapper.find('li').length).toEqual(3);
  });
});
