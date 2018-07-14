import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Swiper.css';

class Swiper extends Component {
  imageContainerElement = React.createRef();

  state = {
    startX: 0,
    distance: 0,
    direction: null,
    touch: null,
    translate: 0,
    imgWidth: 0,
    activeIndex: 0
  };

  static defaultProps = {
    threshold: 15
  };

  static propTypes = {
    children: PropTypes.node.isRequired,
    threshold: PropTypes.number
  };

  componentDidMount() {
    setTimeout(this.setImageWidth, 0);
  }

  setImageWidth = () => {
    this.setState({
      imgWidth: this.imageContainerElement.current.offsetWidth
    });
  };

  handleTouchStart = (e) => {
    const [ touch ] = e.touches;
    
    this.setState({
      startX: touch.clientX, 
      touch: touch
    });
  };
  
  handleTouchMove = (e) => {
    if (e.touches.length !== 1) return;

    const [ touch ] = e.touches;
    const { startX } = this.state;
    const distance = touch.clientX - startX;
    const direction = distance > 0 ? 'right' : 'left';

    this.setState({
      touch: touch,
      distance: distance,
      direction: direction
    });
  };

  handleTouchEnd = () => {
    const { imgWidth, distance, direction, activeIndex } = this.state;
    const { threshold } = this.props;
    const { getTranslateAmount, updateActiveIndex } = this;
    const translateAmount = (Math.abs(distance) > threshold ? -imgWidth : 0);
    // Need willSwipe flag to properly increment/decrement activeIndex
    const willSwipe = translateAmount !== 0;

    this.setState({
      startX: 0,
      distance: 0,
      touch: null,
      translate: getTranslateAmount(activeIndex, direction, translateAmount),
      activeIndex: willSwipe ? updateActiveIndex(activeIndex, direction) : activeIndex
    });
  };

  getTranslateAmount = (activeIndex, direction, translateAmount) => {
    const { imgWidth, translate } = this.state;
    const imgCount = this.imageContainerElement.current.children.length;
    const totalWidth = imgCount * imgWidth;

    if (direction === 'left') return (translate - imgWidth) % totalWidth;
    return translate - (translate === 0 ? totalWidth - imgWidth : translateAmount);
  };

  updateActiveIndex = (activeIndex, direction) => {
    const imgCount = this.imageContainerElement.current.children.length;

    if (direction === 'left') return (activeIndex + 1) % imgCount;
    return activeIndex === 0 ? imgCount - 1 : activeIndex - 1;
  };

  render() {
    const { children } = this.props;

    return (
      <div 
        className={style['swipe-container']}
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
        onTouchEnd={this.handleTouchEnd}
      >
        <div
          ref={this.imageContainerElement}
          className={style['images-container']}
          style={{ transform: `translateX(${this.state.translate}px)` }}
        >
          {children}
        </div>
      </div>
    );
  }
}

export default Swiper;