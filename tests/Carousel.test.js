import React from 'react';
import { shallow, mount } from 'enzyme';
import Carousel from '../src/components/Carousel';

const images = [
  { title: 'image 1', src: 'images/slide-1.jpg' },
  { title: 'image 2', src: 'images/slide-2.jpg' },
  { title: 'image 3', src: 'images/slide-3.jpg' },
  { title: 'image 4', src: 'images/slide-4.jpg' }
];

test('should render', () => {
  const wrapper = shallow(
    <Carousel images={[]} />
  );
  expect(wrapper);
});

test('should render 4 images', () => {
  const wrapper = mount(
    <Carousel images={images} />
  );
  expect(wrapper.find('img').length).toBe(4);
});

test('should render arrow icons by default', () => {
  const wrapper = mount(
    <Carousel images={images} />
  );
  expect(wrapper.find('Icon').length).toBe(2);
});

test('should NOT render arrow icons if showArrows is set to false', () => {
  const wrapper = mount(
    <Carousel images={images} showArrows={false} />
  );
  expect(wrapper.find('Icon').length).toBe(0);
});

test('should NOT render navigation dots by default', () => {
  const wrapper = mount(
    <Carousel images={images} />
  );
  expect(wrapper.find('.dots-container').length).toBe(0);
});

test('should render navigation dots if showDots prop is passed', () => {
  const wrapper = mount(
    <Carousel images={images} showDots />
  );
  expect(wrapper.find('.dots-container').length).toBe(1);
});

test('should render Swiper by default', () => {
  const wrapper = mount(
    <Carousel images={images} />
  );
  expect(wrapper.find('.swipe-container').length).toBe(1);
});

test('should NOT render Swiper if useSwiper prop is set to false', () => {
  const wrapper = mount(
    <Carousel images={images} useSwiper={false} />
  );
  expect(wrapper.find('.swipe-container').length).toBe(0);
});

test('should correctly update activeIndex on left arrow click', () => {
  const wrapper = shallow(
    <Carousel images={images} />
  );
  const leftButton = wrapper.children().at(0);
  leftButton.simulate('click');
  expect(wrapper.state().activeIndex).toBe(3);
});

test('should correctly update activeIndex on right arrow click', () => {
  const wrapper = shallow(
    <Carousel images={images} />
  );
  const rightButton = wrapper.children().at(2);
  rightButton.simulate('click');
  expect(wrapper.state().activeIndex).toBe(1);
});

test('should correctly update activeIndex on navigation dot click', () => {
  const wrapper = mount(
    <Carousel images={images} showDots />
  );
  const dot3 = wrapper.find('.dots-container').children().at(2);
  dot3.simulate('click');
  expect(wrapper.state().activeIndex).toBe(2);
});

test('snapshot', () => {
  const wrapper = shallow(
    <Carousel images={images} />
  );
  expect(wrapper).toMatchSnapshot();
});
