import React from 'react';

import { DocsCodeBlock } from '@/components/Docs';

const code = `
import React from 'react';
import { AutoComplete } from 'quark-components';
import { statesList } from './statesList';

<AutoComplete 
  suggestions={statesList}
  name="state"
  label="State"
  placeholder="e.g., type 'new'"
/>
`;

export const AutoCompleteCode = (): React.ReactElement => (
  <DocsCodeBlock>{code}</DocsCodeBlock>
);
