import React from 'react';

import { DocsCodeBlock } from '../../../components/Docs';

const code = `
import React from 'react';
import { HeaderBar } from 'quark-components';

<HeaderBar title="HeaderBar Title" />
`;

export const HeaderBarCode = (): React.ReactElement => (
  <DocsCodeBlock>{code}</DocsCodeBlock>
);
