import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import style from './AutoComplete.css';

class AutoComplete extends Component {
  state = {
    filteredSuggestions: [],
    value: ''
  };

  static propTypes = {
    suggestions: PropTypes.array.isRequired,
    name: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string
  };

  handleChange = (e) => {
    const { suggestions } = this.props;
    const val = e.target.value.toLowerCase();
    const filteredSuggestions = suggestions.filter(v => v.toLowerCase().startsWith(val));

    this.setState({
      value: val,
      filteredSuggestions: val.length ? filteredSuggestions : []
    });
  };

  handleClick = (suggestion) => () => {
    this.setState({
      value: suggestion,
      filteredSuggestions: []
    });
  };

  render() {
    const renderedSuggestions = this.state.filteredSuggestions.map(suggestion => (
      <li 
        key={suggestion}
        className={style.suggestion}
        onClick={this.handleClick(suggestion)}
      >
        {suggestion}
      </li>
    ));

    return (
      <Fragment>
        <Input 
          value={this.state.value}
          onChange={this.handleChange}
          {...this.props}
        />
        <ul className={style['suggestion-list']}>
          { renderedSuggestions }
        </ul>
      </Fragment>
    );
  }
}

export default AutoComplete;