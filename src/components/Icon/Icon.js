import React from 'react';
import PropTypes from 'prop-types';
import icons from './IconModule';
import style from './Icon.css';

const Icon = ({ value, color }) => {
  return (
    <svg fill={color}>
      {icons[value]}
    </svg>
  );
};

Icon.propTypes = {
  value: PropTypes.string.isRequired,
  color: PropTypes.string
};

export default Icon;
