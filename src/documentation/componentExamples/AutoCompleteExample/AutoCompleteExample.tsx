import React from 'react';

import { AutoComplete } from '@/components/AutoComplete';

const suggestions = [
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota'
];

export const AutoCompleteExample = (): React.ReactElement => (
  <AutoComplete
    suggestions={suggestions}
    name="state"
    label="State"
    placeholder="e.g., type 'new'"
  />
);
