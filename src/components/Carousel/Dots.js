import React from 'react';
import PropTypes from 'prop-types';
import style from './Dots.css';

const Dots = ({ images, activeIndex, containerWidth, slideToIndex }) => (
  <div className={style['dots-container']} style={{ width: containerWidth }}>
    {
      images.map((item, i) => (
        <span
          key={item.title}
          className={ activeIndex === i ? style.active : '' }
          onClick={slideToIndex(i)}
          style={{ width: containerWidth / 35, height: containerWidth / 35 }}
        >
        </span>
      ))
    }
  </div>
);

Dots.propTypes = {
  images: PropTypes.array.isRequired,
  activeIndex: PropTypes.number.isRequired,
  containerWidth: PropTypes.number.isRequired,
  slideToIndex: PropTypes.func.isRequired
};

export default Dots;
