import React from 'react';

import { DocsCodeBlock } from '../../../components/Docs';

const code = `
import React from 'react';
import { List } from 'quark-components';

<List
  title="List Items"
  data={[
    'List Item 1',
    'List Item 2',
    'List Item 3',
    'List Item 4',
    'List Item 5'
  ]}
/>
`;

export const ListCode = (): React.ReactElement => (
  <DocsCodeBlock>{code}</DocsCodeBlock>
);
