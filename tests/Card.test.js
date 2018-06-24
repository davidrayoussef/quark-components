import React from 'react';
import { shallow } from 'enzyme';
import Card from '../src/components/Card';

test('should render', () => {
  const wrapper = shallow(
    <Card name="React" />
  );
  expect(wrapper);
});

test('should render a Card title/name', () => {
  const wrapper = shallow(
    <Card name="David" />
  );
  expect(wrapper.find('h3').text()).toBe('David');
});

test('should render a description if a description prop is passed', () => {
  const wrapper = shallow(
    <Card name="Title" description="A description." />
  );
  expect(wrapper.find('p').text()).toBe('A description.');
});

test('should render an image if an avatarSrc prop is passed', () => {
  const wrapper = shallow(
    <Card name="Title" avatarSrc="/images/img1.jpg" />
  );
  expect(wrapper.find('img').length).toBe(1);
});

test('should render an achor link of a url prop is passed', () => {
  const wrapper = shallow(
    <Card name="React" url="https://react.org" />
  );
  expect(wrapper.find('a').length).toBe(1);
});

test('snapshot', () => {
  const wrapper = shallow(
    <Card name="Title" />
  );
  expect(wrapper).toMatchSnapshot();
});
