import React from 'react';
import DocsCodeBlock from '../../../components/Docs/DocsCodeBlock';

const code = `
import React from 'react';
import List from 'quark-components/List';

<List
  listTitle="List Items"
  data={[
    { name: 'List Item 1' },
    { name: 'List Item 2' },
    { name: 'List Item 3' },
    { name: 'List Item 4' },
    { name: 'List Item 5' }
  ]}
/>
`;

export const ListCode = () => (
  <DocsCodeBlock>
    {code}
  </DocsCodeBlock>
);
