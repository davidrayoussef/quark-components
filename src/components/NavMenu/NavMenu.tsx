import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { NavMenuProps } from '../../shared';
import {
  computeHoverColor,
  computeActiveColor,
  isMobile
} from '../../utilities';

import style from './NavMenu.css';

export class NavMenu extends Component<NavMenuProps> {
  static defaultProps = {
    linkColor: 'rgb(52, 88, 226)',
    linkType: 'anchorLink',
    linkDisabled: false
  };

  handleLinkClick = (event: React.MouseEvent): void => {
    const { linkDisabled, handleMobileLinkClick } = this.props;
    if (linkDisabled) event.preventDefault();
    if (handleMobileLinkClick) handleMobileLinkClick();
  };

  render(): JSX.Element {
    const { data, linkColor, linkType, menuTitle, linkDisabled } = this.props;
    const renderListItems = () => {
      if (linkType === 'routerLink') {
        return data.map(({ name }) => (
          <NavLink
            exact
            to={'/' + name.toLowerCase()}
            key={name}
            style={{ color: linkColor }}
            activeStyle={{
              borderColor: linkColor,
              background: computeActiveColor(linkColor)
            }}
            onClick={this.handleLinkClick}
          >
            {name}
          </NavLink>
        ));
      }
      return data.map(({ name }) => (
        <a
          key={name}
          href={linkDisabled ? '#' : '/' + name.toLowerCase()}
          style={{ color: linkColor }}
          onClick={this.handleLinkClick}
        >
          {name}
        </a>
      ));
    };
    return (
      <aside
        className={style.sidebar}
        style={{
          ...(this.props.mobileStyles ?? {}),
          display:
            !isMobile() ||
            !this.props.hasOwnProperty('isOpen') ||
            (isMobile() && this.props.isOpen)
              ? 'block'
              : 'none'
        }}
      >
        {menuTitle && (
          <h2 className={style.menuTitle}>{menuTitle.toUpperCase()}</h2>
        )}
        <nav className={style.nav}>{renderListItems()}</nav>
        <style>{computeHoverColor(linkColor)}</style>
      </aside>
    );
  }
}
