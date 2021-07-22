import React from 'react';

import { DocsCodeBlock } from '@/components/Docs';

const code = `
import React from 'react';
import { InputTable } from 'quark-components';

const options = {
  rowCount: 10,
  title: 'Purchased Orders',
  columnDefs: [
    {
      headerName: 'Part Number',
      fieldName: 'partNumber',
      validation: {
        value: str => str.length <= 10,
        message: 'Invalid Part Number',
        required: true
      }
    },
    {
      headerName: 'Description',
      fieldName: 'description',
      validation: {
        value: str => str.length < 30,
        message: '1-30 characters',
        required: true
      }
    },
    {
      headerName: 'Quantity',
      fieldName: 'quantity',
      type: 'float',
      validation: {
        value: /^\d+$/,
        message: 'Invalid Quantity',
        required: true
      }
    },
    {
      headerName: 'Price Paid',
      fieldName: 'price',
      type: 'float',
      validation: {
        value: /^\d+(\.\d{1,2})?$/,
        message: 'Invalid Price',
        required: true
      }
    }
  ],
  onSubmit(data) {
    console.log(data);
  }
};

<InputTable
  columnDefs={options.columnDefs}
  rowCount={options.rowCount}
  title={options.title}
  onSubmit={options.onSubmit}
/>
`;

export const InputTableCode = (): React.ReactElement => (
  <DocsCodeBlock>{code}</DocsCodeBlock>
);
