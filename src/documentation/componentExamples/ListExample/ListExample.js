import React from 'react';
import List from '../../../components/List/List';

export const ListExample = () => (
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
);
