import React from 'react';

import { DocsCodeBlock } from '../../../components/Docs';

const code = `
import React from 'react';
import { Dropdown } from 'quark-components';

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

export const DropdownCode = (): React.ReactElement => (
  <DocsCodeBlock>{code}</DocsCodeBlock>
);
