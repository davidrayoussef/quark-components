import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import style from './Carousel.css';

class Carousel extends Component {
  state = {
    activeIndex: 0,
    translate: 0
  };

  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  constructor(props) {
    super(props);
    this.element = React.createRef();
  }

  componentDidMount() {
    // Use setTimeout to get rendered image width after styles have loaded
    setTimeout(() => {
      this.imgWidth = this.element.current.clientWidth;
    }, 0);
  }

  handleLeftArrowClick = () => {
    const { activeIndex, translate } = this.state;
    const imgCount = this.props.images.length;

    this.setState({
      translate: activeIndex === 0 ? translate - this.imgWidth * (imgCount - 1) : translate + this.imgWidth,
      activeIndex: activeIndex === 0 ? imgCount - 1 : activeIndex - 1
    });
  };

  handleRightArrowClick = () => {
    const { activeIndex, translate } = this.state;
    const imgCount = this.props.images.length;

    this.setState({
      translate: (translate - this.imgWidth) % (this.imgWidth * imgCount),
      activeIndex: (activeIndex + 1) % imgCount
    });
  };

  render() {
    const renderedImages = this.props.images.map(img =>
      <img
        key={img.title}
        src={img.src}
        alt={img.title}
      />
    );

    if (renderedImages.length) {
      return (
        <main className={style.wrapper}>
          <Icon
            value="arrowLeft"
            width="5vw"
            style={{ cursor: 'pointer', minWidth: 35, maxWidth: 50 }}
            onClick={this.handleLeftArrowClick}
          />

          <div className={style.images}>
            <div
              ref={this.element}
              className={style['image-container']}
              style={{ transform: `translateX(${this.state.translate}px)` }}
            >
              {renderedImages}
            </div>
          </div>

          <Icon
            value="arrowRight"
            width="5vw"
            style={{ cursor: 'pointer', minWidth: 35, maxWidth: 50 }}
            onClick={this.handleRightArrowClick}
          />
        </main>
      );
    }
    return null;
  }
}

export default Carousel;
