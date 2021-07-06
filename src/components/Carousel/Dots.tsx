import React from 'react';

import { DotsProps } from '../../shared';

import style from './Dots.scss';

export const Dots: React.VFC<DotsProps> = ({
  images,
  activeIndex,
  containerWidth,
  slideToIndex
}: DotsProps) => (
  <div className={style.dotsContainer} style={{ width: containerWidth }}>
    {images.map((item, i) => (
      <span
        key={item.title}
        className={activeIndex === i ? style.active : ''}
        onClick={slideToIndex(i)}
        style={{ width: containerWidth / 35, height: containerWidth / 35 }}
      ></span>
    ))}
  </div>
);
