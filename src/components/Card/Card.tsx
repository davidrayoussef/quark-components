import React from 'react';

import { CardProps } from '../../shared';

import style from './Card.css';

export const Card: React.FC<CardProps> = ({
  children,
  title,
  avatarSrc,
  description,
  ...rest
}: CardProps) => {
  return (
    <div className={style.card} {...rest}>
      <h3>{title}</h3>
      {avatarSrc && <img src={avatarSrc} alt={title} />}
      {description && <p className={style.description}>{description}</p>}
      {children}
    </div>
  );
};
