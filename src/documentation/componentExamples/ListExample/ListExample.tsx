import React from 'react';

import { List } from '@/components/List';

export const ListExample = (): React.ReactElement => (
  <List
    title="List Items"
    data={[
      'List Item 1',
      'List Item 2',
      'List Item 3',
      'List Item 4',
      'List Item 5'
    ]}
  />
);
