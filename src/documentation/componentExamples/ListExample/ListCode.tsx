import React from 'react';

import { DocsCodeBlock } from '../../../components/Docs';

const code = `
import React from 'react';
import { List } from 'quark-components';

<List
  title="List Items"
  data={[
    { name: 'List Item 1' },
    { name: 'List Item 2' },
    { name: 'List Item 3' },
    { name: 'List Item 4' },
    { name: 'List Item 5' }
  ]}
/>
`;

export const ListCode = (): React.ReactElement => (
  <DocsCodeBlock>{code}</DocsCodeBlock>
);
