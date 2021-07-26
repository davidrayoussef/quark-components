import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { InputTable } from './';

describe('InputTable', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(
      <InputTable
        rowCount={10}
        title="Purchased Orders"
        columnDefs={[
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
          }
        ]}
      />
    );
  });
  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
