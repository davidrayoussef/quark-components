import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import style from './Dropdown.css';

class Dropdown extends Component {
  state = {
    isOpen: false
  };

  static defaultProps = {
    linksDisabled: false
  };

  static propTypes = {
    label: PropTypes.string,
    data: PropTypes.array.isRequired,
    linksDisabled: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.dropdownElement = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleClickOutside);
  }

  toggleMenu = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  handleClickOutside = (e) => {
    if ( this.state.isOpen && !this.dropdownElement.current.contains(e.target) ) {
      this.toggleMenu();
    }
  };

  handleLinkClick = (e) => {
    if (this.props.linksDisabled) e.preventDefault();
  };

  render() {
    const { isOpen } = this.state;
    const { label, data } = this.props;
    const menuItems = data.map(({ name, url, linksDisabled }) => (
      <a
        key={name}
        href={url && !linksDisabled ? url : '#'}
        onClick={this.handleLinkClick}
      >
        {name}
      </a>
    ));

    return (
      <div className={style.dropdown} ref={this.dropdownElement}>
        <div className={style.label} onClick={this.toggleMenu}>
          <span>{label}</span>
          <Icon
            value="arrowDown"
            color="#BBB"
            style={{ width: 15 }}
          />
        </div>
        <ul className={style[isOpen ? 'show' : '']}>
          {menuItems}
        </ul>
      </div>
    );
  }
}

export default Dropdown;
