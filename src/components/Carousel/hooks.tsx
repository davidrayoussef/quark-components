import React from 'react';

import { CarouselState } from '@/shared';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useCarousel(imgCount: number): { [key: string]: any } {
  const imgContainerElement: React.RefObject<HTMLDivElement> = React.useRef();
  const initialState: CarouselState = {
    activeIndex: 0,
    imgWidth: 0,
    shouldAnimate: true,
    translate: 0
  };
  const [
    { activeIndex, imgWidth, shouldAnimate, translate },
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
      imgWidth: imgContainerElement.current.offsetWidth
    }));
  }

  function handleResize(): void {
    const imgWidth = imgContainerElement.current.offsetWidth;
    setState(prevState => ({
      ...prevState,
      imgWidth,
      translate:
        Math.sign(prevState.translate) * (prevState.activeIndex * imgWidth),
      shouldAnimate: false
    }));
  }

  function slidePrev(): void {
    const imgWidth = imgContainerElement.current.offsetWidth;
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
    const imgWidth = imgContainerElement.current.offsetWidth;
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

  return {
    activeIndex,
    imgContainerElement,
    imgWidth,
    shouldAnimate,
    translate,
    setImageWidth,
    slidePrev,
    slideNext,
    slideToIndex
  };
}
