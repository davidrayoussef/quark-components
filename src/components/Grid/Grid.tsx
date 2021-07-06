import React, { Fragment } from 'react';

import { GridProps } from '../../shared';

import style from './Grid.scss';

export const Grid: React.FC<GridProps> = ({
  children,
  cols,
  rows,
  fluid,
  ...rest
}: GridProps) => {
  cols =
    typeof cols === 'string'
      ? cols
      : typeof cols === 'number'
      ? `repeat(${cols}, 1fr)`
      : undefined;
  rows =
    typeof rows === 'string'
      ? rows
      : typeof rows === 'number'
      ? `repeat(${rows}, 1fr)`
      : undefined;
  return (
    <Fragment>
      <div className={`${style.grid} ${fluid ? style.fluid : ''}`} {...rest}>
        {children}
      </div>
      <style>
        {`
          :root {
            ${cols ? '--cols: ' + cols : ''};
            ${rows ? '--rows: ' + rows : ''};
          }
        `}
      </style>
    </Fragment>
  );
};
