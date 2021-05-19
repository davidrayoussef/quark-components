import React from 'react';

import { DocsCodeBlock } from '../../../components/Docs';

const code = `
import React from 'react';
import { Dropdown } from 'quark-components';

const data = [
  { label: 'Stocks', value: 'stocks' },
  { label: 'Bonds', value: 'bonds' },
  { label: 'Etfs', value: 'etfs' },
  { label: 'Options', value: 'options' },
  { label: 'Cryptocurrencies', value: 'cryptocurrencies' }
];

<Dropdown 
  data={data}
  defaultLabel="Investment Types"
  onMenuItemClick={item => console.log(item)}
/>
`;

export const DropdownCode = (): React.ReactElement => (
  <DocsCodeBlock>{code}</DocsCodeBlock>
);
