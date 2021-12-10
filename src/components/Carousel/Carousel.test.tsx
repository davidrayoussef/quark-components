import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { Carousel } from './';

describe('Carousel', () => {
  const images = [
    { title: 'image 1', src: 'images/slide-1.jpg' },
    { title: 'image 2', src: 'images/slide-2.jpg' },
    { title: 'image 3', src: 'images/slide-3.jpg' },
    { title: 'image 4', src: 'images/slide-4.jpg' }
  ];
  const imgWidth = 500;
  const fullImgContainerWidth = images.length * imgWidth;
  jest.spyOn(React, 'useRef').mockReturnValue({
    get current() {
      return { offsetWidth: imgWidth };
    },
    set current(_) {}
  });
  beforeEach(() => {
    render(<Carousel images={images} />);
  });
  test('renders 4 images', () => {
    expect(screen.getAllByRole('img').length).toEqual(4);
  });
  test('renders arrow icons by default', () => {
    const { container } = render(<Carousel images={images} />);
    expect(container.querySelectorAll('.arrowIcon').length).toEqual(2);
  });
  test('does not render arrow icons if showArrows is set to false', () => {
    const { container } = render(
      <Carousel images={images} showArrows={false} />
    );
    expect(container.querySelectorAll('.arrowIcon').length).toEqual(0);
  });
  test('does not render navigation dots by default', () => {
    const { container } = render(<Carousel images={images} />);
    expect(container.querySelector('.dotsContainer')).not.toBeInTheDocument();
  });
  test('renders navigation dots if showDots prop is passed', () => {
    const { container } = render(<Carousel images={images} showDots />);
    expect(container.querySelector('.dotsContainer')).toBeInTheDocument();
  });
  test('renders Swiper by default', () => {
    const { container } = render(<Carousel images={images} />);
    expect(container.querySelector('.swiperContainer')).toBeInTheDocument();
  });
  test('does not render Swiper if useSwiper prop is set to false', () => {
    const { container } = render(
      <Carousel images={images} useSwiper={false} />
    );
    expect(container.querySelector('.swiperContainer')).not.toBeInTheDocument();
  });
  test('moves image container by amount of image width on left and right arrow click', () => {
    const { container } = render(<Carousel images={images} />);
    const getImgContainerStyle = () =>
      container.querySelector('.imageContainer').getAttribute('style');
    expect(getImgContainerStyle().includes('translateX(0px)')).toBe(true);
    fireEvent.click(container.querySelectorAll('.arrowIcon')[0]);
    const expectedTranslateAmount = -(fullImgContainerWidth - imgWidth);
    expect(
      getImgContainerStyle().includes(
        `translateX(${expectedTranslateAmount}px)`
      )
    ).toBe(true);
    fireEvent.click(container.querySelectorAll('.arrowIcon')[1]);
    expect(getImgContainerStyle().includes('translateX(0px)')).toBe(true);
  });
});
