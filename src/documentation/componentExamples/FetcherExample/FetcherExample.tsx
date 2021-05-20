import React from 'react';

import { Fetcher } from '../../../components/Fetcher';
import { Loader } from '../../../components/Loader';
import { Card } from '../../../components/Card';

export const FetcherExample = (): React.ReactElement => (
  <Fetcher loader={Loader} url="https://api.github.com/users/davidrayoussef">
    {({ name, avatar_url, location }) => (
      <Card>
        <h3>{name}</h3>
        <img src={avatar_url} alt="David Ra" style={{ borderRadius: '50%' }} />
        <p>{location}</p>
        <a href="https://github.com/davidrayoussef">Github link</a>
      </Card>
    )}
  </Fetcher>
);
