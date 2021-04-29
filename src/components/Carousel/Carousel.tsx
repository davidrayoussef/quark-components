import React, { Component, Fragment } from 'react';

import { Dots } from './Dots';
import { Icon } from '../Icon';
import { Image } from '../Image';
import { Swiper } from '../Swiper';

import { CarouselProps, CarouselState, SwiperProps } from '../../shared';

import style from './Carousel.css';

export class Carousel extends Component<CarouselProps, CarouselState> {
  imageContainerElement: React.RefObject<HTMLDivElement> = React.createRef();

  state: Readonly<CarouselState> = {
    activeIndex: 0,
    translate: 0,
    imgWidth: 0,
    shouldAnimate: true
  };

  static defaultProps = {
    showArrows: true,
    showDots: false,
    useSwiper: true
  };

  componentDidMount(): void {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount(): void {
    window.removeEventListener('resize', this.handleResize);
  }

  setImageWidth = (): void => {
    this.setState({
      imgWidth: this.imageContainerElement.current.offsetWidth
    });
  };

  handleResize = (): void => {
    const { activeIndex, translate } = this.state;
    this.setState({
      imgWidth: this.imageContainerElement.current.offsetWidth,
      translate:
        Math.sign(translate) *
        (activeIndex * this.imageContainerElement.current.offsetWidth),
      shouldAnimate: false
    });
  };

  slidePrev = (): void => {
    const { activeIndex, translate } = this.state;
    const imgCount = this.props.images.length;
    const imgWidth =
      this.imageContainerElement.current &&
      this.imageContainerElement.current.offsetWidth;
    this.setState({
      translate:
        activeIndex === 0
          ? translate - imgWidth * (imgCount - 1)
          : translate + imgWidth,
      activeIndex: activeIndex === 0 ? imgCount - 1 : activeIndex - 1,
      shouldAnimate: true
    });
  };

  slideNext = (): void => {
    const { activeIndex, translate } = this.state;
    const imgCount = this.props.images.length;
    const imgWidth =
      this.imageContainerElement.current &&
      this.imageContainerElement.current.offsetWidth;
    this.setState({
      translate: (translate - imgWidth) % (imgWidth * imgCount),
      activeIndex: (activeIndex + 1) % imgCount,
      shouldAnimate: true
    });
  };

  slideToIndex = (index: number) => (): void => {
    const { activeIndex, translate, imgWidth } = this.state;
    this.setState({
      translate:
        translate +
        (index > activeIndex
          ? -((index - activeIndex) * imgWidth)
          : (activeIndex - index) * imgWidth),
      activeIndex: index,
      shouldAnimate: true
    });
  };

  render(): JSX.Element {
    const { activeIndex, translate, imgWidth, shouldAnimate } = this.state;
    const { images, showArrows, showDots, useSwiper } = this.props;
    const renderedImages = images.map(({ title, src }) => (
      <Image key={title} src={src} alt={title} onLoad={this.setImageWidth} />
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
      props.onSwipeLeft = this.slideNext;
      props.onSwipeRight = this.slidePrev;
    } else Component = Fragment;
    return renderedImages.length ? (
      <section
        className={style.wrapper}
        style={!showArrows ? { gridTemplateColumns: '1fr' } : {}}
      >
        {showArrows && (
          <Icon
            value="arrowLeft"
            color="lightgray"
            style={arrowIconStyle}
            onClick={this.slidePrev}
          />
        )}
        <div className={style.images}>
          <Component {...props}>
            <div
              ref={this.imageContainerElement}
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
              slideToIndex={this.slideToIndex}
            />
          )}
        </div>
        {showArrows && (
          <Icon
            value="arrowRight"
            color="lightgray"
            style={arrowIconStyle}
            onClick={this.slideNext}
          />
        )}
      </section>
    ) : null;
  }
}
