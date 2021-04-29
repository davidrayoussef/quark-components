import React, { Fragment } from 'react';

import { Icon } from '../Icon';

import { NavMenuProps, NavMenuWithMobileState } from '../../shared';

import style from './withMobile.css';

export const withMobileMenu = (
  Component: React.ComponentClass<NavMenuProps>
): React.ComponentClass<NavMenuProps> => {
  return class NavMenuWithMobile extends React.Component<
    NavMenuProps,
    NavMenuWithMobileState
  > {
    state: Readonly<NavMenuWithMobileState> = {
      isOpen: false,
      mobileStyles: {}
    };

    handleMenuIconClick = (): void => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };

    handleMobileLinkClick = (): void => {
      this.setState({
        isOpen: false
      });
    };

    handleResize = (): void => {
      if (window.matchMedia('(max-width: 800px)').matches) {
        this.setState({
          mobileStyles: {
            width: '100vw',
            height: '100vh',
            position: 'fixed',
            overflowY: 'auto',
            paddingBottom: '100%'
          }
        });
      } else {
        this.setState({
          mobileStyles: {}
        });
      }
    };

    componentDidMount(): void {
      this.handleResize();
      window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount(): void {
      window.removeEventListener('resize', this.handleResize);
    }

    render(): JSX.Element {
      const { isOpen } = this.state;
      return (
        <Fragment>
          <Icon
            value="menu"
            className={`${style.menuIcon} ${isOpen ? style.close : ''}`}
            onClick={this.handleMenuIconClick}
          />
          <Component
            {...this.props}
            isOpen={isOpen}
            handleMobileLinkClick={this.handleMobileLinkClick}
            mobileStyles={this.state.mobileStyles}
          />
        </Fragment>
      );
    }
  };
};
