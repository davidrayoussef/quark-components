import React, { Fragment } from 'react';

import { Dots } from './Dots';
import { Icon } from '../Icon';
import { Swiper } from '../Swiper';

import { CarouselProps, SwiperProps } from '@/shared';
import { useCarousel } from './hooks';

import style from './Carousel.scss';

export const Carousel: React.FC<CarouselProps> = ({
  images,
  showArrows = true,
  showDots = false,
  useSwiper = true
}: CarouselProps) => {
  const {
    activeIndex,
    imgContainerElement,
    imgWidth,
    shouldAnimate,
    translate,
    setImageWidth,
    slidePrev,
    slideNext,
    slideToIndex
  } = useCarousel(images.length);
  const renderedImages = images.map(({ title, src }) => (
    <img key={title} src={src} alt={title} onLoad={setImageWidth} />
  ));
  let Component;
  const props: Pick<SwiperProps, 'onSwipeLeft' | 'onSwipeRight'> = {};
  if (useSwiper) {
    Component = Swiper;
    props.onSwipeLeft = slideNext;
    props.onSwipeRight = slidePrev;
  } else Component = Fragment;
  return renderedImages.length ? (
    <section
      className={style.carousel}
      style={!showArrows ? { gridTemplateColumns: '1fr' } : {}}
    >
      {showArrows && (
        <Icon
          value="arrowLeft"
          color="lightgray"
          className={style.arrowIcon}
          onClick={slidePrev}
        />
      )}
      <div className={style.images}>
        <Component {...props}>
          <div
            ref={imgContainerElement}
            className={style.imageContainer}
            style={{
              transform: `translateX(${translate}px)`,
              transition: shouldAnimate ? 'transform .4s ease-in-out' : 'none'
            }}
          >
            {renderedImages}
          </div>
        </Component>
        {showDots && (
          <Dots
            images={images}
            activeIndex={activeIndex}
            containerWidth={imgWidth}
            slideToIndex={slideToIndex}
          />
        )}
      </div>
      {showArrows && (
        <Icon
          value="arrowRight"
          color="lightgray"
          className={style.arrowIcon}
          onClick={slideNext}
        />
      )}
    </section>
  ) : null;
};
