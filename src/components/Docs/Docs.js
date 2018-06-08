import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import HeaderBar from '../HeaderBar/HeaderBar';
import NavMenu from '../NavMenu/NavMenu';
import { withMobileMenu } from '../NavMenu/withMobileMenu';
import style from './Docs.css';

const NavMenuWithMobile = withMobileMenu(NavMenu);

const Docs = ({ children, headerTitle, ...props }) => {
  const isHome = window.location.hash === '#/';

  return (
    <div className={style.wrapper}>
      <HeaderBar>
        <h1>
          <Link to="/">
            {headerTitle}
          </Link>
        </h1>
      </HeaderBar>
      <main className={`${style.main} ${isHome ? style.landing : ''}`}>
        <NavMenuWithMobile {...props} />
        { children }
      </main>
    </div>
  );
};

Docs.propTypes = {
  children: PropTypes.node.isRequired,
  headerTitle: PropTypes.string
};

export default Docs;
