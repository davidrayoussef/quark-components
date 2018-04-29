import React from 'react';
import PropTypes from 'prop-types';
import style from './Button.css';
import { getTypeStyle } from '../../utils/getButtonStyles';
console.log(getTypeStyle);

const Button = ({ children, type, size, ...props }) => {
  return (
    <button
      className={`
        ${style.button}
        ${getTypeStyle(type, style)}
      `}
      {...props}
    >
      { children }
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  size: PropTypes.string
};

export default Button;
