import { Component } from 'react';
import PropTypes from 'prop-types';

class Fetcher extends Component {
  static proptypes = {
    render: PropTypes.func.isRequired,
    loader: PropTypes.element,
    url: PropTypes.string.isRequired
  };

  state = {
    data: undefined
  };

  constructor() {
    super();

    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(this.props.url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          data: data
        })
      })
      .catch(err => console.log(err));
  }

  render() {
    const { data } = this.state;
    const { loader } = this.props;

    if (data) return this.props.render(data);
    else if (loader) return loader;
    return null;
  }
}

export default Fetcher;
