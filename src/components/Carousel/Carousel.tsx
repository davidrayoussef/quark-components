import React, { Fragment } from 'react';

import { Dots } from './Dots';
import { Icon } from '../Icon';
import { Swiper } from '../Swiper';

import { CarouselProps, CarouselState, SwiperProps } from '@/shared';

import style from './Carousel.scss';

export const Carousel: React.FC<CarouselProps> = ({
  images,
  showArrows = true,
  showDots = false,
  useSwiper = true
}: CarouselProps) => {
  const imageContainerElement: React.RefObject<HTMLDivElement> = React.useRef();
  const initialState: CarouselState = {
    activeIndex: 0,
    imgWidth: 0,
    shouldAnimate: true,
    translate: 0
  };
  const [
    { activeIndex, translate, imgWidth, shouldAnimate },
    setState
  ] = React.useState(initialState);

  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function setImageWidth(): void {
    setState(prevState => ({
      ...prevState,
      imgWidth: imageContainerElement.current.offsetWidth
    }));
  }

  function handleResize(): void {
    setState(prevState => ({
      ...prevState,
      imgWidth: imageContainerElement.current.offsetWidth,
      translate:
        Math.sign(translate) *
        (activeIndex * imageContainerElement.current.offsetWidth),
      shouldAnimate: false
    }));
  }

  function slidePrev(): void {
    const imgCount = images.length;
    const imgWidth = imageContainerElement.current?.offsetWidth;
    setState(prevState => ({
      ...prevState,
      translate:
        activeIndex === 0
          ? translate - imgWidth * (imgCount - 1)
          : translate + imgWidth,
      activeIndex: activeIndex === 0 ? imgCount - 1 : activeIndex - 1,
      shouldAnimate: true
    }));
  }

  function slideNext(): void {
    const imgCount = images.length;
    const imgWidth = imageContainerElement.current?.offsetWidth;
    setState(prevState => ({
      ...prevState,
      translate: (translate - imgWidth) % (imgWidth * imgCount),
      activeIndex: (activeIndex + 1) % imgCount,
      shouldAnimate: true
    }));
  }

  function slideToIndex(index: number) {
    return (): void => {
      setState(prevState => ({
        ...prevState,
        translate:
          translate +
          (index > activeIndex
            ? -((index - activeIndex) * imgWidth)
            : (activeIndex - index) * imgWidth),
        activeIndex: index,
        shouldAnimate: true
      }));
    };
  }

  const renderedImages = images.map(({ title, src }) => (
    <img key={title} src={src} alt={title} onLoad={setImageWidth} />
  ));
  const arrowIconStyle = {
    cursor: 'pointer',
    minWidth: 25,
    maxWidth: 50,
    width: '7vw'
  };
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
          style={arrowIconStyle}
          onClick={slidePrev}
        />
      )}
      <div className={style.images}>
        <Component {...props}>
          <div
            ref={imageContainerElement}
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
          style={arrowIconStyle}
          onClick={slideNext}
        />
      )}
    </section>
  ) : null;
};
