import React from 'react';

import { DocsCodeBlock } from '@/components/Docs/DocsCodeBlock';

const code = `
import React from 'react';
import { Carousel } from 'quark-components';

<Carousel showDots>
  <img src="images/slide-1.jpg" />
  <img src="images/slide-2.jpg" />
  <img src="images/slide-3.jpg" />
  <img src="images/slide-4.jpg" />
</Carousel>

<Carousel delay={2500}>
  <span>1</span>
  <span>2</span>
  <span>3</span>
  <span>4</span>
</Carousel>
`;

export const CarouselCode = (): React.ReactElement => (
  <DocsCodeBlock>{code}</DocsCodeBlock>
);
