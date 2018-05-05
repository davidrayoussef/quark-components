import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import style from './Carousel.css';

class Carousel extends Component {
  state = {
    activeIndex: 0
  };

  static defaultProps = {
    imgWidth: 900
  };

  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
    imgWidth: PropTypes.number
  };

  handleLeftArrowClick = (e) => {
    console.log(e.target);
  };

  handleRightArrowClick = (e) => {
    console.log(e.target);
  };

  render() {
    const { images, imgWidth } = this.props;

    const renderedImages = images.map(img =>
      <img key={img.title} src={img.src} alt={img.title} />
    );

    if (renderedImages.length) {
      return (
        <main className={style.wrapper}>
          <Icon value="arrowLeft" onClick={this.handleLeftArrowClick} />

          <div className={style['image-container']}>
            { renderedImages }
          </div>

          <Icon value="arrowRight" onClick={this.handleRightArrowClick} />
        </main>
      );
    }
    return null;
  }
}

export default Carousel;
