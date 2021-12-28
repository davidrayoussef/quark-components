import React from 'react';

import { DotsProps } from '@/shared';

import style from './Dots.scss';

export const Dots: React.VFC<DotsProps> = ({
  activeIndex,
  childrenCount,
  handleNavClick
}: DotsProps) => (
  <div className={style.dotsContainer}>
    {Array.from({ length: childrenCount }, (_: void, index: number) => (
      <span
        key={index}
        className={activeIndex === index ? style.active : ''}
        onClick={handleNavClick.bind(undefined, index)}
      ></span>
    ))}
  </div>
);
