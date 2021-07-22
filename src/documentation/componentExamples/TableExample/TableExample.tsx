import React from 'react';

import { Table } from '@/components/Table';

export const TableExample = (): React.ReactElement => (
  <Table
    tableHeads={['Company', 'Contact', 'Country']}
    tableData={[
      {
        companyName: 'Acme',
        companyContact: 'Will E. Conner',
        companyCountry: 'Australia'
      },
      {
        companyName: 'Thunder Co.',
        companyContact: 'Leona O. Katz',
        companyCountry: 'Senegal'
      },
      {
        companyName: 'MOU',
        companyContact: 'Adam Man',
        companyCountry: 'United States'
      },
      {
        companyName: 'OP Transforms, Inc.',
        companyContact: 'Opie Primo',
        companyCountry: 'Germany'
      }
    ]}
  />
);
