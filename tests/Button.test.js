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

test('should add .primary class if styleType="primary"', () => {
  const wrapper = shallow(
    <Button styleType="primary">Button Text</Button>
  );
  expect(wrapper.find('.primary').length).toBe(1);
});

test('should add .secondary class if styleType="secondary"', () => {
  const wrapper = shallow(
    <Button styleType="secondary">Button Text</Button>
  );
  expect(wrapper.find('.secondary').length).toBe(1);
});

test('should add .reverse class if styleType="reverse"', () => {
  const wrapper = shallow(
    <Button styleType="reverse">Button Text</Button>
  );
  expect(wrapper.find('.reverse').length).toBe(1);
});

test('should add .danger class if styleType="danger"', () => {
  const wrapper = shallow(
    <Button styleType="danger">Button Text</Button>
  );
  expect(wrapper.find('.danger').length).toBe(1);
});

test('snapshot', () => {
  const wrapper = shallow(
    <Button styleType="primary">Button Text</Button>
  );
  expect(wrapper).toMatchSnapshot();
});
