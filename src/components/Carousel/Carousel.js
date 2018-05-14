import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import style from './Carousel.css';

class Carousel extends Component {
  state = {
    activeIndex: 0,
    translate: 0,
    imgWidth: 0,
    shouldAnimate: true
  };

  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  constructor(props) {
    super(props);
    this.element = React.createRef();
  }

  componentDidMount() {
    this.setImageWidth();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  setImageWidth = () => {
    this.setState({
      imgWidth: this.element.current.offsetWidth
    });
  }

  handleResize = () => {
    const { activeIndex, translate } = this.state;

    this.setState({
      imgWidth: this.element.current.offsetWidth,
      translate: Math.sign(translate) * (activeIndex * this.element.current.offsetWidth),
      shouldAnimate: false
    });
  };

  slidePrev = () => {
    const { activeIndex, translate } = this.state;
    const imgCount = this.props.images.length;
    const imgWidth = this.element.current.offsetWidth;

    this.setState({
      translate: activeIndex === 0 ? translate - imgWidth * (imgCount - 1) : translate + imgWidth,
      activeIndex: activeIndex === 0 ? imgCount - 1 : activeIndex - 1,
      shouldAnimate: true,
      imgWidth
    });
  };

  slideNext = () => {
    const { activeIndex, translate } = this.state;
    const imgCount = this.props.images.length;
    const imgWidth = this.element.current.offsetWidth;

    this.setState({
      translate: (translate - imgWidth) % (imgWidth * imgCount),
      activeIndex: (activeIndex + 1) % imgCount,
      shouldAnimate: true,
      imgWidth
    });
  };

  render() {
    const { imgWidth, translate, shouldAnimate } = this.state;
    const renderedImages = this.props.images.map(img =>
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
            width="5vw"
            style={{ cursor: 'pointer', minWidth: 35, maxWidth: 50 }}
            onClick={this.slidePrev}
          />

          <div className={style.images}>
            <div
              ref={this.element}
              className={style['image-container']}
              style={{
                transform: `translateX(${translate}px)`,
                transition: shouldAnimate ? 'transform .4s ease-in-out' : 'none'
              }}
            >
              {renderedImages}
            </div>
          </div>

          <Icon
            value="arrowRight"
            color="lightgray"
            width="5vw"
            style={{ cursor: 'pointer', minWidth: 35, maxWidth: 50 }}
            onClick={this.slideNext}
          />
        </main>
      );
    }
    return null;
  }
}

export default Carousel;
