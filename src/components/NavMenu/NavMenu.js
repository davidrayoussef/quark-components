import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import style from './NavMenu.css';
import { computeHoverColor, computeActiveColor } from '../../utils/computeHoverColor';

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
    menuTitle: PropTypes.string
  };

  handleClick = (e) => {
    if (this.props.linkDisabled) e.preventDefault();
  };

  render() {
    const { data, linkColor, linkType, menuTitle } = this.props;
    const renderListItems = () => {
      if (linkType === 'routerLink') {
        return data.map(({name}) => (
          <NavLink
            key={name}
            to={'/' + name.toLowerCase()}
            style={{ color: linkColor }}
            activeStyle={{ borderColor: linkColor, background: computeActiveColor(linkColor) }}
            onClick={this.handleClick}
          >
            {name}
          </NavLink>
        ));
      }
      return data.map(({ name }) => (
        <a
          key={name}
          href={'/' + name.toLowerCase()}
          style={{ color: linkColor }}
          onClick={this.handleClick}
        >
          {name}
        </a>
      ));
    };

    return (
      <Fragment>
        <h2 className={style.menuTitle}>{menuTitle.toUpperCase()}</h2>
        <nav className={style.nav}>
          { renderListItems() }
        </nav>
        <style>{ computeHoverColor(linkColor) }</style>
      </Fragment>
    );
  }
}

export default NavMenu;
