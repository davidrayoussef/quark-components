import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component {
  state = {
    imgSrc: this.props.src
  };

  static defaultProps = {
    onLoad: () => {},
    onError: () => {}
  };

  static propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onLoad: PropTypes.func,
    onError: PropTypes.func,
    defaultSrc: PropTypes.string,
    style: PropTypes.object
  };

  handleError = () => {
    const { defaultSrc, onError } = this.props;

    this.setState({
      imgSrc: defaultSrc || ''
    }, onError);
  };

  render() {
    const { defaultSrc, ...rest } = this.props; //eslint-disable-line

    return (
      <img 
        {...rest}
        src={this.state.imgSrc} 
        onError={this.handleError}
      />
    );
  }
}

export default Image;