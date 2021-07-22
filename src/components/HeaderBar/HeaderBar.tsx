import React from 'react';

import { HeaderBarProps } from '@/shared';

import style from './HeaderBar.scss';

export const HeaderBar: React.FC<HeaderBarProps> = ({
  children,
  title,
  navLinks
}: HeaderBarProps) => {
  return (
    <header className={style.header}>
      {title && <h1>{title}</h1>}
      {navLinks && <nav className={style.nav}>{navLinks}</nav>}
      {children}
    </header>
  );
};
