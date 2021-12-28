import React from 'react';

import { Carousel } from '@/components/Carousel';

export const CarouselExample = (): React.ReactElement => (
  <React.Fragment>
    <Carousel showDots>
      <img src="images/slide-1.jpg" />
      <img src="images/slide-2.jpg" />
      <img src="images/slide-3.jpg" />
      <img src="images/slide-4.jpg" />
    </Carousel>
    <Carousel delay={2500} style={{ paddingTop: 100 }}>
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
    </Carousel>
  </React.Fragment>
);
