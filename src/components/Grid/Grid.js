import React from 'react';
import PropTypes from 'prop-types';
import style from './Grid.css';

const Grid = ({ children, cols, rows }) => {
  return (
    <div className={style.grid}>
      {children}
      <style>
        {`
          :root {
            --cols: ${cols};
          }
        `}
      </style>
    </div>
  );
};

Grid.defaultProps = {
  cols: 'repeat(auto-fit, minmax(200px, 1fr))'
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  cols: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  rows: PropTypes.number
};

export default Grid;
