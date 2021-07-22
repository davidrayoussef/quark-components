import React from 'react';

import { ButtonProps } from '@/shared';
import { getTypeStyle, getSizeStyle } from '@/utilities';

import style from './Button.scss';

export const Button: React.FC<ButtonProps> = ({
  children,
  styleType,
  size,
  component,
  ...rest
}: ButtonProps) => {
  const Component = component ?? 'button';
  return (
    <Component
      className={`
        ${style.button}
        ${getTypeStyle(styleType, style)}
        ${getSizeStyle(size, style)}
      `}
      {...rest}
    >
      {children}
    </Component>
  );
};
