import React from 'react';
import DocsCodeBlock from '../../../components/Docs/DocsCodeBlock';

const code = `
import React from 'react';
import Carousel from '{yourpath}/Carousel';

const images = [
  {
    title: 'Carousel Image 1',
    src: 'images/slide-1.jpg'
  },
  {
    title: 'Carousel Image 2',
    src: 'images/slide-2.jpg'
  },
  {
    title: 'Carousel Image 3',
    src: 'images/slide-3.jpg'
  },
  {
    title: 'Carousel Image 4',
    src: 'images/slide-4.jpg'
  }
];

<Carousel images={images} />
`;

export const CarouselCode = () => (
  <DocsCodeBlock>
    {code}
  </DocsCodeBlock>
);
