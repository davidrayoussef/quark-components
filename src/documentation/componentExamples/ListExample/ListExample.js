import React from 'react';
import List from '../../../components/List/List';

const ListExample = ({ listTitle, data }) => (
  <List
    listTitle="List of Things"
    data={["Thing 1", "Thing 2", "Thing 3", "Thing 4", "Thing 5"]}
  />
);

export default ListExample;
