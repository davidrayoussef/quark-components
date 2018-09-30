import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import style from './AutoComplete.css';

class AutoComplete extends Component {
  state = {
    filteredSuggestions: [],
    userInput: ''
  };

  static propTypes = {
    suggestions: PropTypes.array.isRequired
  };

  handleChange = (e) => {
    const { suggestions } = this.props;
    const val = e.target.value.toLowerCase();
    const filteredSuggestions = suggestions.filter(v => v.toLowerCase().startsWith(val));

    this.setState({
      filteredSuggestions: e.target.value.length ? filteredSuggestions : [],
      userInput: e.currentTarget.value
    });
  };

  handleClick = (suggestion) => () => {
    this.setState({
      userInput: suggestion,
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
          value={this.state.userInput}
          onChange={this.handleChange} 
        />
        <ul className={style['suggestion-list']}>
          { renderedSuggestions }
        </ul>
      </Fragment>
    );
  }
}

export default AutoComplete;