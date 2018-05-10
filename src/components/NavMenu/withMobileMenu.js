import React, { Fragment } from 'react';
import Icon from '../Icon/Icon';
import style from './withMobile.css';

export const withMobileMenu = (Component) => {
  return class NavMenuWithMobile extends React.Component {
    state = {
      isOpen: false
    };

    handleMenuIconClick = (e) => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };

    handleMobileLinkClick = () => {
      this.setState({
        isOpen: false
      });
    };

    render() {
      return (
        <Fragment>
          <Icon
            className={style['menu-icon']}
            value="menu"
            onClick={this.handleMenuIconClick}
          />
          <Component
            isOpen={this.state.isOpen}
            handleMobileLinkClick={this.handleMobileLinkClick}
            mobileStyles={{ width: '100vw', height: '100vh', position: 'fixed' }}
            {...this.props}
          />
        </Fragment>
      );
    }
  }
};
