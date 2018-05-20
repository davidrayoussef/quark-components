import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import style from './NavMenu.css';
import { computeHoverColor, computeActiveColor } from '../../utils/computeColor';
import { isMobile } from '../../utils/isMobile';

class NavMenu extends Component {
  static defaultProps = {
    linkColor: 'rgb(52, 88, 226)',
    linkType: 'anchorLink',
    linkDisabled: false
  };

  static propTypes = {
    data: PropTypes.array.isRequired,
    linkColor: PropTypes.string,
    linkType: PropTypes.string,
    linkDisabled: PropTypes.bool,
    menuTitle: PropTypes.string,
    isOpen: PropTypes.bool,
    mobileStyles: PropTypes.object,
    handleMobileLinkClick: PropTypes.func,
    path: PropTypes.string
  };

  handleLinkClick = (e) => {
    const { linkDisabled, handleMobileLinkClick } = this.props;

    if (linkDisabled) e.preventDefault();
    if (handleMobileLinkClick) handleMobileLinkClick();
  };

  render() {
    const { data, linkColor, linkType, menuTitle, linkDisabled, path } = this.props;
    const renderListItems = () => {
      if (linkType === 'routerLink') {
        return data.map(({ name }) => (
          <NavLink
            key={name}
            to={(path || '') + name.toLowerCase()}
            style={{ color: linkColor }}
            activeStyle={{ borderColor: linkColor, background: computeActiveColor(linkColor) }}
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
      <Fragment>
        <aside
          className={style.sidebar}
          style={{
            ...(this.props.mobileStyles || {}),
            display: isMobile() && this.props.isOpen ? 'block' : !isMobile() || !this.props.hasOwnProperty('isOpen') ? 'block' : 'none'
          }}
        >
          { menuTitle && <h2 className={style.menuTitle}>{menuTitle.toUpperCase()}</h2> }
          <nav className={style.nav}>
            { renderListItems() }
          </nav>
          <style>{ computeHoverColor(linkColor) }</style>
        </aside>
      </Fragment>
    );
  }
}

export default NavMenu;
