import React from 'react';
import PropTypes from 'prop-types';
import icons from './IconModule';

const Icon = ({ value, color }) => {
  return (
    <svg fill={color} x="0px" y="0px" width="60px" height="60px" viewBox="0 0 60 60">
      {icons[value]}
    </svg>
  );
};

Icon.propTypes = {
  value: PropTypes.string.isRequired,
  color: PropTypes.string
};

export default Icon;