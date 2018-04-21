import React from 'react';
import DocsCodeBlock from '../../../components/Docs/DocsCodeBlock';

const code = `
import React from 'react';
import Loader from '{yourpath}/Loader';

<Loader />
`;

export const LoaderCode = () => (
  <DocsCodeBlock>
    {code}
  </DocsCodeBlock>
);
