import React from 'react';

import { InputTable } from '@/components/InputTable';

import { InputTableProps } from '@/shared';

const options: InputTableProps = {
  rowCount: 10,
  title: 'Purchased Orders',
  columnDefs: [
    {
      headerName: 'Part Number',
      fieldName: 'partNumber',
      validation: {
        value: (str: string) => str.length <= 10,
        message: 'Invalid Part Number',
        required: true
      }
    },
    {
      headerName: 'Description',
      fieldName: 'description',
      validation: {
        value: (str: string) => str.length < 30,
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
  onSubmit(data: unknown) {
    // eslint-disable-next-line
    console.log(`Data to Post:\n${JSON.stringify(data, null, 2)}`);
  }
};

export const InputTableExample = (): React.ReactElement => (
  <InputTable
    columnDefs={options.columnDefs}
    rowCount={options.rowCount}
    title={options.title}
    onSubmit={options.onSubmit}
  />
);
