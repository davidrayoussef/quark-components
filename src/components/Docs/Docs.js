import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import HeaderBar from '../HeaderBar/HeaderBar';
import './Docs.style.css';

const Docs = ({ children }) => {
  return (
    <Fragment>
      <HeaderBar title="React Simple UI Components" />
      <div className="wrapper">
        {children}
      </div>
    </Fragment>
  );
};

Docs.proptypes = {
  children: PropTypes.node.isRequired
};

export default Docs;
