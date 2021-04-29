import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderBar } from '../HeaderBar';
import { DocsLogo } from './DocsLogo';
import { NavMenu, withMobileMenu } from '../NavMenu';
import { Icon } from '../Icon';

import { routes } from '../../documentation/routes';
import { DocsProps } from '../../shared';

import style from './Docs.css';

const NavMenuWithMobile = withMobileMenu(NavMenu);

export const Docs: React.FC<DocsProps> = ({
  headerTitle,
  ...rest
}: DocsProps) => {
  return (
    <div className={style.wrapper}>
      <HeaderBar>
        <h1>
          <Link to="/" className={style.logoWrapper}>
            <DocsLogo />
            {headerTitle}
          </Link>
        </h1>
        <a href="https://github.com/davidrayoussef/quark-components">
          <Icon
            value="github"
            color="rgba(255, 255, 255, .6)"
            width="30"
            className={style.githubIcon}
          />
        </a>
      </HeaderBar>
      <main className={style.main}>
        <NavMenuWithMobile {...rest} />
        {routes}
      </main>
    </div>
  );
};
