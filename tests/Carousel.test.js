import React from 'react';
import { shallow, mount } from 'enzyme';
import Carousel from '../src/components/Carousel';

const images = [
  { title: 'image 1', src: 'images/slide-1.jpg' },
  { title: 'image 2', src: 'images/slide-2.jpg' },
  { title: 'image 3', src: 'images/slide-3.jpg' }
];

test('should render', () => {
  const wrapper = shallow(
    <Carousel images={[]} />
  );
  expect(wrapper);
});

test('should render 3 images', () => {
  const wrapper = mount(
    <Carousel images={images} />
  );
  expect(wrapper.find('img').length).toBe(3);
});

test('should correctly update activeIndex on left arrow click', () => {
  const wrapper = shallow(
    <Carousel images={images} />
  );
  const leftButton = wrapper.children().at(0);
  leftButton.simulate('click');
  expect(wrapper.state().activeIndex).toBe(2);
});

test('should correctly update activeIndex on right arrow click', () => {
  const wrapper = shallow(
    <Carousel images={images} />
  );
  const rightButton = wrapper.children().at(2);
  rightButton.simulate('click');
  expect(wrapper.state().activeIndex).toBe(1);
});

test('snapshot', () => {
  const wrapper = shallow(
    <Carousel images={images} />
  );
  expect(wrapper).toMatchSnapshot();
});
