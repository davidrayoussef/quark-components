import React, { Fragment } from 'react';
import List from '../../../components/List/List';

const ListExample = () => (
  <Fragment>
    <section className="examples">
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
    </section>
    <section className="editor">

    </section>
  </Fragment>
);

export default ListExample;
