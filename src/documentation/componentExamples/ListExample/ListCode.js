import React from 'react';
import DocsCodeBlock from '../../../components/Docs/DocsCodeBlock';

const code = `
import React from 'react';
import List from '{yourpath}/List';

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

const ListCode = () => (
  <DocsCodeBlock>
    {code}
  </DocsCodeBlock>
);

export default ListCode;
