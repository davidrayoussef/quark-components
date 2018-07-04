import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Fetcher extends Component {
  static propTypes = {
    render: PropTypes.func.isRequired,
    loader: PropTypes.func,
    url: PropTypes.string.isRequired
  };

  state = {
    data: null
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const res = await fetch(this.props.url);
    const json = await res.json();

    this.setState({
      data: json
    });
  }

  render() {
    const { data } = this.state;
    const { loader } = this.props;

    if (data) return this.props.render(data);
    else if (loader) return React.createElement(loader);
    return null;
  }
}

export default Fetcher;
