import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { Fetcher } from './';

global.fetch = jest.fn().mockImplementation(() => {
  return new Promise(resolve => {
    resolve({
      json() {
        return { name: 'John Doe', location: 'New York City' };
      }
    });
  });
});

describe('Fetcher', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Fetcher url="https://example.com">
        {({ name, location }) => (
          <div>
            <h3>{name}</h3>
            <p>{location}</p>
          </div>
        )}
      </Fetcher>
    );
  });
  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
