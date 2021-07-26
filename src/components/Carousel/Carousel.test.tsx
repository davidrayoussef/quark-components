import React from 'react';
import { shallow, mount, ShallowWrapper } from 'enzyme';

import { Carousel } from './';

const images = [
  { title: 'image 1', src: 'images/slide-1.jpg' },
  { title: 'image 2', src: 'images/slide-2.jpg' },
  { title: 'image 3', src: 'images/slide-3.jpg' },
  { title: 'image 4', src: 'images/slide-4.jpg' }
];

describe('Carousel', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<Carousel images={images} />);
  });
  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });
  test('renders 4 images', () => {
    expect(wrapper.find('img').length).toEqual(4);
  });
  test('renders arrow icons by default', () => {
    const wrapper = mount(<Carousel images={images} />);
    expect(wrapper.find('Icon').length).toEqual(2);
  });
  test('does not render arrow icons if showArrows is set to false', () => {
    const wrapper = mount(<Carousel images={images} showArrows={false} />);
    expect(wrapper.find('Icon').length).toEqual(0);
  });
  test('does not render navigation dots by default', () => {
    const wrapper = mount(<Carousel images={images} />);
    expect(wrapper.find('.dots-container').exists()).toBe(false);
  });
  test('renders navigation dots if showDots prop is passed', () => {
    const wrapper = mount(<Carousel images={images} showDots />);
    expect(wrapper.find('.dotsContainer').exists()).toBe(true);
  });
  test('renders Swiper by default', () => {
    const wrapper = mount(<Carousel images={images} />);
    expect(wrapper.find('.swipeContainer').exists()).toBe(true);
  });
  test('does not render Swiper if useSwiper prop is set to false', () => {
    const wrapper = mount(<Carousel images={images} useSwiper={false} />);
    expect(wrapper.find('.swipeContainer').exists()).toBe(false);
  });
});
