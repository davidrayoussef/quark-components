import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useAutoComplete(suggestions: string[]): { [key: string]: any } {
  const [filteredSuggestions, setFilteredSuggestions] = React.useState([]);
  const [value, setValue] = React.useState('');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const value = event.target.value.toLowerCase();
    const filteredSuggestions = suggestions.filter((suggestion: string) =>
      suggestion.toLowerCase().startsWith(value)
    );
    setValue(value);
    setFilteredSuggestions(value.length ? filteredSuggestions : []);
  }

  function handleClick(suggestion: string) {
    return (): void => {
      setValue(suggestion);
      setFilteredSuggestions([]);
    };
  }

  return {
    filteredSuggestions,
    value,
    handleClick,
    handleChange
  };
}
