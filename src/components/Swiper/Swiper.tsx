import React, { Component } from 'react';

import { SwiperProps, SwiperState } from '../../shared';

import style from './Swiper.css';

export class Swiper extends Component<SwiperProps, SwiperState> {
  imageContainerElement: React.RefObject<HTMLDivElement> = React.createRef();

  state: Readonly<SwiperState> = {
    startX: 0,
    distance: 0,
    direction: undefined,
    touch: undefined,
    translate: 0,
    imgWidth: 0,
    activeIndex: 0,
    shouldAnimate: true
  };

  static defaultProps: Pick<
    SwiperProps,
    'threshold' | 'onSwipeLeft' | 'onSwipeRight'
  > = {
    threshold: 15,
    onSwipeLeft: () => {},
    onSwipeRight: () => {}
  };

  componentDidMount(): void {
    setTimeout(this.setImageWidth, 0);
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount(): void {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = (): void => {
    const { translate, activeIndex } = this.state;
    const imgWidth = this.imageContainerElement.current.offsetWidth;
    this.setState({
      imgWidth,
      translate: Math.sign(translate) * (activeIndex * imgWidth),
      shouldAnimate: false
    });
  };

  setImageWidth = (): void => {
    this.setState({
      imgWidth: this.imageContainerElement.current.offsetWidth
    });
  };

  handleTouchStart = (event: React.TouchEvent<HTMLDivElement>): void => {
    const touch = event.touches[0] as Touch;
    this.setState({
      touch,
      startX: touch.clientX,
      imgWidth: this.imageContainerElement.current.offsetWidth
    });
  };

  handleTouchMove = (event: React.TouchEvent<HTMLDivElement>): void => {
    if (event.touches.length !== 1) return;
    const touch = event.touches[0] as Touch;
    const { startX } = this.state;
    const distance = touch.clientX - startX;
    const direction = distance > 0 ? 'right' : 'left';
    this.setState({
      touch,
      distance,
      direction
    });
  };

  handleTouchEnd = (): void => {
    const { imgWidth, distance, direction, activeIndex } = this.state;
    const { threshold } = this.props;
    const translateAmount = Math.abs(distance) > threshold ? -imgWidth : 0;
    const willSwipe = translateAmount !== 0;
    if (willSwipe) {
      this.setState(
        {
          startX: 0,
          distance: 0,
          touch: undefined,
          translate: this.getTranslateAmount(translateAmount, direction),
          activeIndex: this.updateActiveIndex(activeIndex, direction),
          shouldAnimate: true
        },
        this.onSwipe
      );
    } else {
      this.setState({
        startX: 0,
        distance: 0,
        touch: undefined
      });
    }
  };

  getTranslateAmount = (
    translateAmount: number,
    direction: 'left' | 'right'
  ): number => {
    const { imgWidth, translate } = this.state;
    const imgCount = this.imageContainerElement.current.children.length;
    const totalWidth = imgCount * imgWidth;
    if (direction === 'left') return (translate - imgWidth) % totalWidth;
    return (
      translate - (translate === 0 ? totalWidth - imgWidth : translateAmount)
    );
  };

  updateActiveIndex = (
    activeIndex: number,
    direction: 'left' | 'right'
  ): number => {
    const imgCount = this.imageContainerElement.current.children.length;
    if (direction === 'left') return (activeIndex + 1) % imgCount;
    return activeIndex === 0 ? imgCount - 1 : activeIndex - 1;
  };

  onSwipe = (): void => {
    const { direction } = this.state;
    const { onSwipeLeft, onSwipeRight } = this.props;
    return direction === 'left' ? onSwipeLeft() : onSwipeRight();
  };

  render(): JSX.Element {
    const { translate, shouldAnimate } = this.state;
    const { children } = this.props;
    return (
      <div
        className={style.swipeContainer}
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
        onTouchEnd={this.handleTouchEnd}
      >
        <div
          ref={this.imageContainerElement}
          className={style.imagesContainer}
          style={{
            transform: `translateX(${translate}px)`,
            transition: shouldAnimate ? 'transform .4s ease-out' : 'none'
          }}
        >
          {children}
        </div>
      </div>
    );
  }
}
