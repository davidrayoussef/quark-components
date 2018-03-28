import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './NavMenu.css';

const NavMenu = ({ data, linkColor, linkType,  menuTitle }) => {
  console.log(data);
  const renderListItems = () => {
    if (linkType === 'routerLink') {
      return data.map(({name}) => (
        <NavLink
          key={name}
          to={'/' + name.toLowerCase()}
          style={{color: linkColor}}
          activeClassName="active"
        >
          {name}
        </NavLink>
      ));
    }

    return data.map(({name}) => (
      <a
        key={name}
        href={'/' + name.toLowerCase()}
        style={{color: linkColor}}
      >
        {name}
      </a>
    ));
  };

  return (
    <Fragment>
      <h2>{menuTitle}</h2>
      <nav>
        { renderListItems() }
      </nav>
    </Fragment>
  );
};

NavMenu.defaultProps = {
  linkColor: '#03a9f4',
  linkType: 'anchorLink'
};

NavMenu.proptypes = {
  data: PropTypes.array.isRequired,
  linkColor: PropTypes.string,
  linkType: PropTypes.string,
  menuTitle: PropTypes.string
};

export default NavMenu;
