import React from 'react';

import { Dropdown } from '../../../components/Dropdown';

const data = [
  { name: 'Profile' },
  { name: 'Settings' },
  { name: 'Help' },
  { name: 'Log Out' }
];

export const DropdownExample = (): React.ReactElement => (
  <Dropdown label="Dropdown Label" data={data} linksDisabled />
);
