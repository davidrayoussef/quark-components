import React from 'react';
import Dropdown from '../../../components/Dropdown/Dropdown';

const data = [
  { name: 'Profile' },
  { name: 'Settings' },
  { name: 'Help' },
  { name: 'Log Out' }
];

export const DropdownExample = () => (
  <Dropdown
    label="Dropdown Label"
    data={data}
    linksDisabled
  />
);
