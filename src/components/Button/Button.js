import React from 'react';
import PropTypes from 'prop-types';
import style from './Button.css';
import { getTypeStyle, getSizeStyle } from '../../utils/getButtonStyles';

const Button = ({ children, type, size, component, ...rest }) => {
  const Component = component ? component : 'button';

  return (
    <Component
      type="button"
      className={`
        ${style.button}
        ${getTypeStyle(type, style)}
        ${getSizeStyle(size, style)}
      `}
      {...rest}
    >
      { children }
    </Component>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  size: PropTypes.string,
  component: PropTypes.string
};

export default Button;
