import React from 'react';

import { DocsCodeBlock } from '../../../components/Docs';

const code = `
import React from 'react';
import { Fetcher, Loader } from 'quark-components';

<Fetcher
  loader={Loader}
  url="https://api.github.com/users/davidrayoussef"
  render={({ name, avatar_url, location, html_url }) => (
    <Card
      name={name}
      avatarSrc={avatar_url}
      description={location}
      linkSrc={html_url}
    />
  )}
/>
`;

export const FetcherCode = (): React.ReactElement => (
  <DocsCodeBlock>{code}</DocsCodeBlock>
);
