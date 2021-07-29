import React, { Fragment } from 'react';

import { Input } from '../Input';

import { AutoCompleteProps } from '@/shared';
import { useAutoComplete } from './hooks';

import style from './AutoComplete.scss';

export const AutoComplete: React.FC<AutoCompleteProps> = ({
  suggestions,
  ...rest
}: AutoCompleteProps) => {
  const {
    filteredSuggestions,
    value,
    handleClick,
    handleChange
  } = useAutoComplete(suggestions);
  return (
    <Fragment>
      <Input value={value} onChange={handleChange} {...rest} />
      <ul className={style.suggestionList}>
        {filteredSuggestions.map((suggestion: string) => (
          <li key={suggestion} onClick={handleClick(suggestion)}>
            {suggestion}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};
