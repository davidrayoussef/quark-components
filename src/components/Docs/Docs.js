import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import HeaderBar from '../HeaderBar/HeaderBar';
import NavMenu from '../NavMenu/NavMenu';
import { withMobileMenu } from '../NavMenu/withMobileMenu';
import style from './Docs.css';

const NavMenuWithMobile = withMobileMenu(NavMenu);

const Docs = ({ children, headerTitle, ...props }) => {
  return (
    <Router>
      <div className={style.wrapper}>
        <HeaderBar title={headerTitle} />
        <main className={style.main}>
          <NavMenuWithMobile {...props} />
          { children }
        </main>
      </div>
    </Router>
  );
};

Docs.propTypes = {
  children: PropTypes.node.isRequired,
  headerTitle: PropTypes.string
};

export default Docs;
