import React, { Component, Fragment } from 'react';

import { Input } from '../Input';

import { AutoCompleteProps, AutoCompleteState } from '../../shared';

import style from './AutoComplete.css';

export class AutoComplete extends Component<
  AutoCompleteProps,
  AutoCompleteState
> {
  state: Readonly<AutoCompleteState> = {
    filteredSuggestions: [],
    value: ''
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { suggestions } = this.props;
    const value = event.target.value.toLowerCase();
    const filteredSuggestions = suggestions.filter(suggestion =>
      suggestion.toLowerCase().startsWith(value)
    );
    this.setState({
      value,
      filteredSuggestions: value.length ? filteredSuggestions : []
    });
  };

  handleClick = (suggestion: string) => (): void => {
    this.setState({
      value: suggestion,
      filteredSuggestions: []
    });
  };

  render(): JSX.Element {
    const renderedSuggestions = this.state.filteredSuggestions.map(
      suggestion => (
        <li
          key={suggestion}
          className={style.suggestion}
          onClick={this.handleClick(suggestion)}
        >
          {suggestion}
        </li>
      )
    );
    return (
      <Fragment>
        <Input
          value={this.state.value}
          onChange={this.handleChange}
          {...this.props}
        />
        <ul className={style.suggestionList}>{renderedSuggestions}</ul>
      </Fragment>
    );
  }
}
