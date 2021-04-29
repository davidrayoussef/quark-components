import React, { Component, ReactElement } from 'react';

import { LazyLoadProps, LazyLoadState } from '../../shared';

import style from './LazyLoad.css';

export class LazyLoad extends Component<LazyLoadProps, LazyLoadState> {
  imgContainerElement: React.RefObject<HTMLDivElement> = React.createRef();

  state: Readonly<LazyLoadState> = {
    active: false
  };

  componentDidMount(): void {
    this.lazyLoadHandler();
    document.addEventListener('scroll', this.lazyLoadHandler);
    window.addEventListener('resize', this.lazyLoadHandler);
    window.addEventListener('orientationchange', this.lazyLoadHandler);
  }

  componentWillUnmount(): void {
    this.removeEventListeners();
  }

  lazyLoadHandler = (): void => {
    const { active } = this.state;
    let imgs = Array.from(this.imgContainerElement.current.children).filter(
      child => child.nodeName === 'IMG'
    );

    if (!active) {
      this.setState({
        active: true
      });
      setTimeout(() => {
        imgs.forEach((img: HTMLImageElement) => {
          if (
            img.getBoundingClientRect().top <= window.innerHeight &&
            img.getBoundingClientRect().bottom >= 0 &&
            getComputedStyle(img).display !== 'none'
          ) {
            this.setAttrs(img);
            imgs = imgs.filter(v => v !== img);
            if (!imgs.length) {
              this.removeEventListeners();
            }
          }
        });
        this.setState({
          active: false
        });
      }, 200);
    }
  };

  setAttrs(img: HTMLImageElement): HTMLImageElement {
    img.src = img.dataset.src;
    img.classList.add('fade-in');
    return img;
  }

  removeEventListeners(): void {
    document.removeEventListener('scroll', this.lazyLoadHandler);
    window.removeEventListener('resize', this.lazyLoadHandler);
    window.removeEventListener('orientationchange', this.lazyLoadHandler);
  }

  render(): JSX.Element {
    const { children } = this.props;

    const images = React.Children.map(children, (child: ReactElement) => {
      // first remove src from images, assign them to data attr, and assign placeholder to src
      return React.cloneElement(child, {
        'data-src': child.props.src,
        src: 'images/lazyload-placeholder.jpg'
      });
    });

    return (
      <div ref={this.imgContainerElement} className={style.imgContainer}>
        {images}
      </div>
    );
  }
}
