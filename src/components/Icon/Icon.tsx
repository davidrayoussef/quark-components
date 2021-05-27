import React from 'react';

import { icons } from './IconModule';
import { IconProps } from '../../shared';

export const Icon: React.VFC<IconProps> = ({
  value,
  color = '#bfbfbf',
  width = 30,
  ...rest
}: IconProps) => {
  return (
    <svg fill={color} x="0" y="0" viewBox="0 0 60 60" width={width} {...rest}>
      {icons[value]}
    </svg>
  );
};
