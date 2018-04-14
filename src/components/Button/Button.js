import React from 'react';
import PropTypes from 'prop-types';
import style from './Button.css';

const Button = ({ children, type, size, ripple }) => {
  const renderTypeStyle = (type, style) => `
    ${
      type === 'secondary' ? style.secondary :
      type === 'reverse' ? style.reverse :
      type === 'danger' ? style.danger :
      style.primary
    }
  `;

  return (
    <button className={`${style.button} ${renderTypeStyle(type, style)}`}>
      { children }
    </button>
  );
};

Button.proptypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool
};

export default Button;
