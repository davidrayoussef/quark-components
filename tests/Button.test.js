import React from 'react';
import { shallow } from 'enzyme';
import Button from '../src/components/Button';

test('should render', () => {
  const wrapper = shallow(
    <Button></Button>
  );
  expect(wrapper);
});

test('should render correct Button text', () => {
  const wrapper = shallow(
    <Button>Button Text</Button>
  );
  expect(wrapper.text()).toBe('Button Text');
});

test('should add .primary class if no type is passed', () => {
  const wrapper = shallow(
    <Button>Button Text</Button>
  );
  expect(wrapper.find('.primary').length).toBe(1);
});

test('should add .primary class if type="primary"', () => {
  const wrapper = shallow(
    <Button type="primary">Button Text</Button>
  );
  expect(wrapper.find('.primary').length).toBe(1);
});

test('should add .secondary class if type="secondary"', () => {
  const wrapper = shallow(
    <Button type="secondary">Button Text</Button>
  );
  expect(wrapper.find('.secondary').length).toBe(1);
});

test('should add .reverse class if type="reverse"', () => {
  const wrapper = shallow(
    <Button type="reverse">Button Text</Button>
  );
  expect(wrapper.find('.reverse').length).toBe(1);
});

test('should add .danger class if type="danger"', () => {
  const wrapper = shallow(
    <Button type="danger">Button Text</Button>
  );
  expect(wrapper.find('.danger').length).toBe(1);
});

test('snapshot', () => {
  const wrapper = shallow(
    <Button type="primary">Button Text</Button>
  );
  expect(wrapper).toMatchSnapshot();
});
