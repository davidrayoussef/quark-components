import React from 'react';

import { DocsCodeBlock } from '@/components/Docs/DocsCodeBlock';

const code = `
import React from 'react';
import { AutoComplete } from 'quark-components';

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

<AutoComplete 
  suggestions={suggestions}
  name="state"
  label="State"
  placeholder="e.g., type 'new'"
/>
`;

export const AutoCompleteCode = (): React.ReactElement => (
  <DocsCodeBlock>{code}</DocsCodeBlock>
);
