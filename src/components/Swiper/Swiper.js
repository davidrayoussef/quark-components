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
    const { translate, imgWidth, distance, direction, activeIndex } = this.state;
    const { threshold } = this.props;
    const translateAmount = (Math.abs(distance) > threshold ? -imgWidth : 0);
    const willSwipe = translateAmount !== 0;

    this.setState({
      startX: 0,
      distance: 0,
      touch: null,
      translate: translate + (direction === 'left' ? translateAmount : -translateAmount),
      activeIndex: willSwipe ? activeIndex + (direction === 'left' ? 1 : -1) : activeIndex
    });
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