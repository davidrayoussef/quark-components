import React, { Fragment } from 'react';

import { Dots } from './Dots';
import { Icon } from '../Icon';
import { Swiper } from '../Swiper';

import { CarouselProps, SwiperProps } from '@/shared';
import { useCarousel } from './hooks';

import style from './Carousel.scss';

export const Carousel: React.FC<CarouselProps> = ({
  children,
  showArrows = true,
  showDots = false,
  useSwiper = true,
  delay,
  ...rest
}: CarouselProps) => {
  const childrenCount = React.Children.count(children);
  const { activeIndex, handleNavClick } = useCarousel(childrenCount, delay);
  const props: Pick<SwiperProps, 'onSwipeLeft' | 'onSwipeRight'> = {};
  let Component;

  if (useSwiper) {
    Component = Swiper;
    props.onSwipeLeft = handleNavClick.bind(undefined, activeIndex + 1);
    props.onSwipeRight = handleNavClick.bind(undefined, activeIndex - 1);
  } else Component = Fragment;

  return childrenCount ? (
    <section
      className={style.carousel}
      style={!showArrows ? { gridTemplateColumns: '1fr' } : {}}
      {...rest}
    >
      {showArrows && (
        <Icon
          value="arrowLeft"
          color="lightgray"
          className={style.arrowIcon}
          onClick={handleNavClick.bind(undefined, activeIndex - 1)}
        />
      )}
      <div className={style.outerContainer}>
        <Component {...props}>
          <div
            className={style.innerContainer}
            style={{
              transform: `translateX(-${activeIndex * 100}%)`,
              transition: 'transform .4s ease-in-out'
            }}
          >
            {React.Children.map(children, child => {
              return React.cloneElement(child, {
                style: {
                  width: '100%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }
              });
            })}
          </div>
        </Component>
        {showDots && (
          <Dots
            activeIndex={activeIndex}
            childrenCount={childrenCount}
            handleNavClick={handleNavClick}
          />
        )}
      </div>
      {showArrows && (
        <Icon
          value="arrowRight"
          color="lightgray"
          className={style.arrowIcon}
          onClick={handleNavClick.bind(undefined, activeIndex + 1)}
        />
      )}
    </section>
  ) : null;
};
