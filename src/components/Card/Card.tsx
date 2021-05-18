import React from 'react';

import { CardProps } from '../../shared';

import style from './Card.css';

export const Card: React.FC<CardProps> = ({
  children,
  title,
  ...rest
}: CardProps) => {
  return (
    <div className={style.card} {...rest}>
      {title && <h3>{title}</h3>}
      {children}
    </div>
  );
};
