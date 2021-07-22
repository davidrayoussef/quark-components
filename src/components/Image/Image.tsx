import React, { Component } from 'react';

import { ImageProps, ImageState } from '@/shared';

export class Image extends Component<ImageProps, ImageState> {
  state: Readonly<ImageState> = {
    imgSrc: this.props.src
  };

  handleError = (): void => {
    const { defaultSrc, onError } = this.props;
    this.setState({ imgSrc: defaultSrc ?? '' }, onError);
  };

  render(): JSX.Element {
    const { defaultSrc, ...rest } = this.props;
    return <img {...rest} src={this.state.imgSrc} onError={this.handleError} />;
  }
}
