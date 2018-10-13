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

test('should add .primary class if no styleType is passed', () => {
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

test('should add .small class if size="small"', () => {
  const wrapper = shallow(
    <Button size="small">Button Text</Button>
  );
  expect(wrapper.find('.small').length).toBe(1);
});

test('should add .normal class if size="normal"', () => {
  const wrapper = shallow(
    <Button size="normal">Button Text</Button>
  );
  expect(wrapper.find('.normal').length).toBe(1);
});

test('should add .large class if size="large"', () => {
  const wrapper = shallow(
    <Button size="large">Button Text</Button>
  );
  expect(wrapper.find('.large').length).toBe(1);
});

test('should render a button element if no component prop is passed', () => {
  const wrapper = shallow(
    <Button>Button Text</Button>
  );
  expect(wrapper.find('button').length).toBe(1);
});

test('should render an anchor tag if "a" is passed to component prop', () => {
  const wrapper = shallow(
    <Button component="a">Button Text</Button>
  );
  expect(wrapper.find('a').length).toBe(1);
});

test('snapshot', () => {
  const wrapper = shallow(
    <Button styleType="primary">Button Text</Button>
  );
  expect(wrapper).toMatchSnapshot();
});
