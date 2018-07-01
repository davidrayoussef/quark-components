import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import HeaderBar from '../HeaderBar/HeaderBar';
import DocsLogo from './DocsLogo';
import NavMenu from '../NavMenu/NavMenu';
import Icon from '../Icon/Icon';
import { withMobileMenu } from '../NavMenu/withMobileMenu';
import style from './Docs.css';

const NavMenuWithMobile = withMobileMenu(NavMenu);

const Docs = ({ children, headerTitle, ...rest }) => {
  const isHome = window.location.hash === '#/';

  return (
    <div className={style.wrapper}>
      <HeaderBar>
        <h1>
          <Link to="/" className={style['logo-wrapper']}>
            <DocsLogo />
            {headerTitle}
          </Link>
        </h1>
        <a href="https://github.com/davidrayoussef/quark-components">
          <Icon 
            value="github" 
            color="rgba(255, 255, 255, .6)"
            width="30"
            className={style['github-icon']}
          />
        </a>
      </HeaderBar>
      <main className={`${style.main} ${isHome ? style.landing : ''}`}>
        <NavMenuWithMobile {...rest} />
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
