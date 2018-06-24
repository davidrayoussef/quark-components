import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dots from './Dots';
import Icon from '../Icon';
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
    showDots: false
  };

  static propTypes = {
    images: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
      })
    ).isRequired,
    showDots: PropTypes.bool
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
    }, () => console.log(this.state.translate));
  };

  render() {
    const { activeIndex, translate, imgWidth, shouldAnimate } = this.state;
    const { images, showDots } = this.props;
    const arrowIconStyle = { 
      cursor: 'pointer', 
      minWidth: 35, 
      maxWidth: 50
    };

    const renderedImages = images.map(img =>
      <img
        key={img.title}
        src={img.src}
        alt={img.title}
        width={imgWidth}
      />
    );

    if (renderedImages.length) {
      return (
        <main className={style.wrapper}>
          <Icon
            value="arrowLeft"
            color="lightgray"
            style={arrowIconStyle}
            onClick={this.slidePrev}
          />

          <div className={style.images}>
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

          <Icon
            value="arrowRight"
            color="lightgray"
            style={arrowIconStyle}
            onClick={this.slideNext}
          />
        </main>
      );
    }
    return null;
  }
}

export default Carousel;
