import React from 'react';

import { CustomHookReturnType } from '@/shared';

export function useFetcher(
  url: string | Request,
  options: {}
): CustomHookReturnType {
  const [data, setData] = React.useState(undefined);
  const [error, setError] = React.useState(undefined);

  React.useEffect(() => {
    fetchData();
  }, []);

  async function fetchData(): Promise<void> {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error);
    }
  }

  return { data, error };
}
