import React from 'react';
import PropTypes from 'prop-types';
import style from './Button.css';
import { getTypeStyle, getSizeStyle } from '../../utils/getButtonStyles';

const Button = ({ children, styleType, size, component, ...rest }) => {
  const Component = component ? component : 'button';

  return (
    <Component
      className={`
        ${style.button}
        ${getTypeStyle(styleType, style)}
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
  styleType: PropTypes.string,
  size: PropTypes.string,
  component: PropTypes.string
};

export default Button;
