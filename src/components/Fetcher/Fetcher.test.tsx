import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';

import { Fetcher } from './';

global.fetch = jest.fn().mockResolvedValue({
  json() {
    return { name: 'John Doe', location: 'New York City' };
  }
});

describe('Fetcher', () => {
  test('renders fetched data', async () => {
    render(
      <Fetcher url="https://example.com">
        {({ name, location }) => (
          <div>
            <h3>{name}</h3>
            <p>{location}</p>
          </div>
        )}
      </Fetcher>
    );
    await waitFor(() =>
      expect(screen.getByText('John Doe')).toBeInTheDocument()
    );
  });
});
