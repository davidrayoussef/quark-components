import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HeaderBar from '../HeaderBar/HeaderBar';
import List from '../List/List';
import './Docs.style.css';

const Docs = ({ children, headerTitle, data, ...props }) => {
  return (
    <Router>
      <Fragment>
        <HeaderBar title={headerTitle} />
        <div className="wrapper">
          <aside>
            <nav>
              <List {...props} data={data} />
            </nav>
          </aside>
          { children }
        </div>
      </Fragment>
    </Router>
  );
};

Docs.proptypes = {
  children: PropTypes.node.isRequired
};

export default Docs;
