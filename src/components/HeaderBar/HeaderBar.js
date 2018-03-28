import React from 'react';
import PropTypes from 'prop-types';
import './HeaderBar.css';

const HeaderBar = ({ title }) => {
  return (
    <header>{title}</header>
  );
};

HeaderBar.proptypes = {
  title: PropTypes.string
};

export default HeaderBar;
