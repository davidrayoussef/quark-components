import React from 'react';
import DocsCodeBlock from '../../../components/Docs/DocsCodeBlock';

const code = `
import React from 'react';
import Carousel from '{yourpath}/Carousel';

<Carousel />
`;

export const CarouselCode = () => (
  <DocsCodeBlock>
    {code}
  </DocsCodeBlock>
);
