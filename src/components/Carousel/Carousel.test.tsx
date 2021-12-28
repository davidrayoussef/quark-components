import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { Carousel } from './';

describe('Carousel', () => {
  const images = Array.from({ length: 4 }, (_, index) => {
    return <img key={index} src={`images/slide-${index}.jpg`} />;
  });
  test('renders 4 images', () => {
    render(<Carousel>{images}</Carousel>);
    expect(screen.getAllByRole('img').length).toEqual(4);
  });
  test('renders numbers', () => {
    render(
      <Carousel>
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </Carousel>
    );
    expect(screen.getByText('3')).toBeInTheDocument();
  });
  test('renders arrow icons by default', () => {
    const { container } = render(<Carousel>{images}</Carousel>);
    expect(container.querySelectorAll('.arrowIcon').length).toEqual(2);
  });
  test('does not render arrow icons if showArrows is set to false', () => {
    const { container } = render(
      <Carousel showArrows={false}>{images}</Carousel>
    );
    expect(container.querySelectorAll('.arrowIcon').length).toEqual(0);
  });
  test('does not render navigation dots by default', () => {
    const { container } = render(<Carousel>{images}</Carousel>);
    expect(container.querySelector('.dotsContainer')).not.toBeInTheDocument();
  });
  test('renders navigation dots if showDots prop is passed', () => {
    const { container } = render(<Carousel showDots>{images}</Carousel>);
    expect(container.querySelector('.dotsContainer')).toBeInTheDocument();
  });
  test('renders Swiper by default', () => {
    const { container } = render(<Carousel>{images}</Carousel>);
    expect(container.querySelector('.swiperContainer')).toBeInTheDocument();
  });
  test('does not render Swiper if useSwiper prop is set to false', () => {
    const { container } = render(
      <Carousel useSwiper={false}>{images}</Carousel>
    );
    expect(container.querySelector('.swiperContainer')).not.toBeInTheDocument();
  });
  test('moves container 100% on left and right arrow click', () => {
    const { container } = render(
      <Carousel useSwiper={false}>{images}</Carousel>
    );
    const getContainerStyle = () =>
      container.querySelector('.innerContainer').getAttribute('style');
    expect(getContainerStyle().includes('translateX(-0%)')).toBe(true);
    fireEvent.click(container.querySelectorAll('.arrowIcon')[1]);
    expect(getContainerStyle().includes(`translateX(-100%)`)).toBe(true);
    fireEvent.click(container.querySelectorAll('.arrowIcon')[0]);
    expect(getContainerStyle().includes('translateX(-0%)')).toBe(true);
  });
});
