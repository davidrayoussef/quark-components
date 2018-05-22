import React from 'react';
import { shallow } from 'enzyme';
import List from '../src/components/List/List';

const data = [
  { name: 'list item 1' },
  { name: 'list item 2' },
  { name: 'list item 3' }
]

test('should render', () => {
  const wrapper = shallow(
    <List data={[]}/>
  );
  expect(wrapper);
});

test('should render a title', () => {
  const wrapper = shallow(
    <List data={[]} listTitle="List Title" />
  );
  expect(wrapper.find('h3').text()).toBe('List Title');
});

test('should render 3 list items', () => {
  const wrapper = shallow(
    <List data={data}/>
  );
  expect(wrapper.find('li').length).toBe(3);
});

test('snapshot', () => {
  const wrapper = shallow(
    <List data={data}/>
  );
  expect(wrapper).toMatchSnapshot();
});
