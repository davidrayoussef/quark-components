import React from 'react';
import Carousel from '../../../components/Carousel/Carousel';

const images = [
  {
    title: 'Carousel Image 1',
    src: 'images/slide-1.jpg'
  },
  {
    title: 'Carousel Image 2',
    src: 'images/slide-2.jpg'
  }
];

export const CarouselExample = () => (
  <Carousel images={images} />
);
