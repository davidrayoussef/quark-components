import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Dots from './Dots';
import Icon from '../Icon';
import Swiper from '../Swiper';
import style from './Carousel.css';

class Carousel extends Component {
  imageContainerElement = React.createRef();

  state = {
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

  static propTypes = {
    images: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
      })
    ).isRequired,
    showArrows: PropTypes.bool,
    showDots: PropTypes.bool,
    useSwiper: PropTypes.bool
  };

  componentDidMount() {
    setTimeout(this.setImageWidth, 0);
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  setImageWidth = () => {
    this.setState({
      imgWidth: this.imageContainerElement.current.offsetWidth
    });
  }

  handleResize = () => {
    const { activeIndex, translate } = this.state;

    this.setState({
      imgWidth: this.imageContainerElement.current.offsetWidth,
      translate: Math.sign(translate) * (activeIndex * this.imageContainerElement.current.offsetWidth),
      shouldAnimate: false
    });
  };

  slidePrev = () => {
    const { activeIndex, translate } = this.state;
    const imgCount = this.props.images.length;
    const imgWidth = this.imageContainerElement.current && this.imageContainerElement.current.offsetWidth;

    this.setState({
      translate: activeIndex === 0 ? translate - imgWidth * (imgCount - 1) : translate + imgWidth,
      activeIndex: activeIndex === 0 ? imgCount - 1 : activeIndex - 1,
      shouldAnimate: true
    });
  };

  slideNext = () => {
    const { activeIndex, translate } = this.state;
    const imgCount = this.props.images.length;
    const imgWidth = this.imageContainerElement.current && this.imageContainerElement.current.offsetWidth;

    this.setState({
      translate: (translate - imgWidth) % (imgWidth * imgCount),
      activeIndex: (activeIndex + 1) % imgCount,
      shouldAnimate: true
    });
  };

  slideToIndex = (index) => () => {
    const { activeIndex, translate, imgWidth } = this.state;

    this.setState({
      translate: translate + (index > activeIndex ? -((index - activeIndex) * imgWidth) : ((activeIndex - index) * imgWidth)),
      activeIndex: index,
      shouldAnimate: true
    });
  };

  render() {
    const { activeIndex, translate, imgWidth, shouldAnimate } = this.state;
    const { images, showArrows, showDots, useSwiper } = this.props;
    const renderedImages = images.map(img =>
      <img
        key={img.title}
        src={img.src}
        alt={img.title}
        width={imgWidth}
      />
    );
    const arrowIconStyle = { 
      cursor: 'pointer', 
      minWidth: 35, 
      maxWidth: 50
    };

    let Component;
    let props = {};

    if (useSwiper) {
      Component = Swiper;
      props.onSwipeLeft = this.slideNext;
      props.onSwipeRight = this.slidePrev;
    }
    else Component = Fragment;

    if (renderedImages.length) {
      return (
        <section className={style.wrapper}>
          { showArrows
            ? <Icon
                value="arrowLeft"
                color="lightgray"
                style={arrowIconStyle}
                onClick={this.slidePrev}
              />
            : null
          }

          <div className={style.images}>

            <Component {...props}>
              <div
                ref={this.imageContainerElement}
                className={style['image-container']}
                style={{
                  transform: `translateX(${translate}px)`,
                  transition: shouldAnimate ? 'transform .4s ease-in-out' : 'none'
                }}
              >
                {renderedImages}
              </div>
            </Component>

            { showDots
              ? <Dots
                  images={images}
                  activeIndex={activeIndex}
                  containerWidth={imgWidth}
                  slideToIndex={this.slideToIndex}
                />
              : null
            }
          </div>

          { showArrows
            ? <Icon
                value="arrowRight"
                color="lightgray"
                style={arrowIconStyle}
                onClick={this.slideNext}
              />
            : null
          }
        </section>
      );
    }
    return null;
  }
}

export default Carousel;
