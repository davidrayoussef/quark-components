import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { Table } from './';

describe('Table', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(
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
    expect(wrapper.exists()).toBe(true);
  });
});
