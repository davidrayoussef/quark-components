import React from 'react';
import DocsCodeBlock from '../../../components/Docs/DocsCodeBlock';

const code = `
import React from 'react';
import Dropdown from '{yourpath}/Dropdown';

const data = [
  { name: 'Profile' },
  { name: 'Settings' },
  { name: 'Help' },
  { name: 'Log Out' }
];

<Dropdown
  label="Dropdown Label"
  data={data}
  linksDisabled
/>
`;

export const DropdownCode = () => (
  <DocsCodeBlock>
    {code}
  </DocsCodeBlock>
);
