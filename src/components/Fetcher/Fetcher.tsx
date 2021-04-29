import React, { Component } from 'react';

import { FetcherProps, FetcherState } from '../../shared';

export class Fetcher extends Component<FetcherProps, FetcherState> {
  state: Readonly<FetcherState> = {
    data: undefined
  };

  componentDidMount(): void {
    this.fetchData();
  }

  fetchData = async (): Promise<void> => {
    const response = await fetch(this.props.url);
    const data = await response.json();
    this.setState({ data });
  };

  render(): JSX.Element {
    const { data } = this.state;
    const { loader } = this.props;
    if (data) return this.props.children(data);
    else if (loader) return React.createElement(loader);
    return null;
  }
}
