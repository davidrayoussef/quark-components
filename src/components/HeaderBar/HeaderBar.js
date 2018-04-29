import React from 'react';
import PropTypes from 'prop-types';
import style from './HeaderBar.css';

const HeaderBar = ({ title }) => {
  return (
    <header className={style.header}>
      <h1>{title}</h1>
    </header>
  );
};

HeaderBar.propTypes = {
  title: PropTypes.string
};

export default HeaderBar;
