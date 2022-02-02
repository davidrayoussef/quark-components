import React from 'react';

import { FetcherProps } from '@/shared';
import { useFetcher } from './hooks';

export const Fetcher: React.FC<FetcherProps> = ({
  url,
  options = {},
  loader,
  children
}: FetcherProps) => {
  const { data } = useFetcher(url, options);

  if (data) return children(data);
  else if (loader) return React.createElement(loader);
  return null;
};
