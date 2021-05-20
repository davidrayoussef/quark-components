import React from 'react';

import { DocsCodeBlock } from '../../../components/Docs';

const code = `
import React from 'react';
import { Fetcher, Loader, Card } from 'quark-components';

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
`;

export const FetcherCode = (): React.ReactElement => (
  <DocsCodeBlock>{code}</DocsCodeBlock>
);
