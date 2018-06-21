import React from 'react';
import PropTypes from 'prop-types';
import icons from './IconModule';

const Icon = ({ value, color, width, ...rest }) => {
  return (
    <svg
      fill={color}
      x="0"
      y="0"
      viewBox="0 0 60 60"
      style={{ width: width }}
      {...rest}
    >
      {icons[value]}
    </svg>
  );
};

Icon.defaultProps = {
  color: 'gray',
  width: 60
};

Icon.propTypes = {
  value: PropTypes.string.isRequired,
  color: PropTypes.string,
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
};

export default Icon;
