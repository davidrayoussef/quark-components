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
            --col-repeat: ${cols};
          }
        `}
      </style>
    </div>
  );
};

Grid.defaultProps = {
  cols: 'auto-fit'
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
