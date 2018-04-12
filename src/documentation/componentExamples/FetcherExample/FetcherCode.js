import React from 'react';
import DocsCodeBlock from '../../../components/Docs/DocsCodeBlock';

const code = `
import React from 'react';
import Fetcher from '{yourpath}/Fetcher';
import Loader from '{yourpath}/Loader';

<Fetcher
  loader={<Loader />}
  url="https://api.github.com/users/davidrayoussef"
  render={({ html_url, location, ...data }) => (
    <Card {...data} linkSrc={html_url} description={location} />
  )}
/>
`;

const FetcherCode = () => (
  <DocsCodeBlock>
    {code}
  </DocsCodeBlock>
);

export default FetcherCode;
