import { Component } from 'react';
import PropTypes from 'prop-types';

class Fetcher extends Component {
  static proptypes = {
    render: PropTypes.func.isRequired,
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
    if (this.state.data) return this.props.render(this.state.data);
    return null;
  }
}

export default Fetcher;
