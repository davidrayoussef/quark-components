import React from 'react';
import DocsCodeBlock from '../../../components/Docs/DocsCodeBlock';

const code = `
import React from 'react';
import Fetcher from '{yourpath}/Fetcher';
import Loader from '{yourpath}/Loader';

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

export const FetcherCode = () => (
  <DocsCodeBlock>
    {code}
  </DocsCodeBlock>
);
