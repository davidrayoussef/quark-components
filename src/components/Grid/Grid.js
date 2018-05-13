import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import style from './Grid.css';

const Grid = ({ children, cols, rows, fluid }) => {
  cols = typeof cols === 'string' ? cols : typeof cols === 'number' ? `repeat(${cols}, 1fr)` : null;
  rows = typeof rows === 'string' ? rows : typeof rows === 'number' ? `repeat(${rows}, 1fr)` : null;

  return (
    <Fragment>
      <div className={`${style.grid} ${fluid ? style.fluid : ''}`}>
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

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  cols: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  rows: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  fluid: PropTypes.bool
};

export default Grid;
