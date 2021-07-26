import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { Button } from './Button';

import { ButtonSize, ButtonType } from '@/shared';

describe('Button', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<Button>Button Text</Button>);
  });
  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });
  test('renders button element if no component prop is passed', () => {
    expect(wrapper.find('button').exists()).toBe(true);
  });
  test('renders correct text', () => {
    expect(wrapper.text()).toEqual('Button Text');
  });
  test('adds .primary class if no styleType is passed', () => {
    expect(wrapper.find('.primary').exists()).toBe(true);
  });
  test('adds .secondary class for styleType="secondary"', () => {
    wrapper.setProps({
      styleType: ButtonType.Secondary
    });
    expect(wrapper.find('.secondary').exists()).toBe(true);
  });
  test('adds .reverse class for styleType="reverse"', () => {
    wrapper.setProps({
      styleType: ButtonType.Reverse
    });
    expect(wrapper.find('.reverse').exists()).toBe(true);
  });
  test('adds .danger class for styleType="danger"', () => {
    wrapper.setProps({
      styleType: ButtonType.Danger
    });
    expect(wrapper.find('.danger').exists()).toBe(true);
  });
  test('adds .small class for size="small"', () => {
    wrapper.setProps({
      size: ButtonSize.Small
    });
    expect(wrapper.find('.small').exists()).toBe(true);
  });
  test('adds .large class for size="large"', () => {
    wrapper.setProps({
      size: ButtonSize.Large
    });
    expect(wrapper.find('.large').exists()).toBe(true);
  });
});
