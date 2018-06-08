import React from 'react';
import PropTypes from 'prop-types';
import style from './HeaderBar.css';

const HeaderBar = ({ children, title }) => {
  return (
    <header className={style.header}>
      { title && <h1>{title}</h1> }
      { children }
    </header>
  );
};

HeaderBar.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
};

export default HeaderBar;
