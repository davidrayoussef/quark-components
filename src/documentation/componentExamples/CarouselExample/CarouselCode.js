import React from 'react';
import DocsCodeBlock from '../../../components/Docs/DocsCodeBlock';

const code = `
import React from 'react';
import Carousel from 'quark-components/Carousel';

const images = [
  {
    title: 'Image 1',
    src: 'images/slide-1.jpg'
  },
  {
    title: 'Image 2',
    src: 'images/slide-2.jpg'
  },
  {
    title: 'Image 3',
    src: 'images/slide-3.jpg'
  },
  {
    title: 'Image 4',
    src: 'images/slide-4.jpg'
  }
];

<Carousel images={images} showDots />
`;

export const CarouselCode = () => (
  <DocsCodeBlock>
    {code}
  </DocsCodeBlock>
);
