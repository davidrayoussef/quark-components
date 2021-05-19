import React from 'react';

import { Dropdown } from '../../../components/Dropdown';

const data = [
  { label: 'Stocks', value: 'stocks' },
  { label: 'Bonds', value: 'bonds' },
  { label: 'Etfs', value: 'etfs' },
  { label: 'Options', value: 'options' },
  { label: 'Cryptocurrencies', value: 'cryptocurrencies' }
];

export const DropdownExample = (): React.ReactElement => (
  <Dropdown
    data={data}
    defaultLabel="Investment Types"
    onMenuItemClick={item => console.log(item)}
  />
);
