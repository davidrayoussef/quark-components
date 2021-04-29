import React from 'react';

import { Fetcher } from '../../../components/Fetcher';
import { Loader } from '../../../components/Loader';
import { Card } from '../../../components/Card';

export const FetcherExample = (): React.ReactElement => (
  <Fetcher loader={Loader} url="https://api.github.com/users/davidrayoussef">
    {({ name, avatar_url, location }) => (
      <Card title={name} avatarSrc={avatar_url} description={location} />
    )}
  </Fetcher>
);
