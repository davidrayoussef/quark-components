import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import HeaderBar from '../HeaderBar/HeaderBar';
import NavMenu from '../NavMenu/NavMenu';
import style from './Docs.css';

const Docs = ({ children, headerTitle, data, ...props }) => {
  return (
    <Router>
      <Fragment>
        <HeaderBar title={headerTitle} />
        <div className={style.wrapper}>
          <aside>
            <NavMenu {...props} linkType='routerLink' data={data} />
          </aside>
          <main className={style.main}>
            { children }
          </main>
        </div>
      </Fragment>
    </Router>
  );
};

Docs.proptypes = {
  children: PropTypes.node.isRequired
};

export default Docs;
