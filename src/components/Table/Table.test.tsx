import React from 'react';
import { render, screen } from '@testing-library/react';

import { Table } from './';

describe('Table', () => {
  beforeEach(() => {
    render(
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
          }
        ]}
      />
    );
  });
  test('renders', () => {
    expect(screen.getByRole('table')).toBeInTheDocument();
  });
});
