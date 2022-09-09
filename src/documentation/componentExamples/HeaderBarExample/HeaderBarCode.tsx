import React from 'react';

import { DocsCodeBlock } from '@/components/Docs/DocsCodeBlock';

const code = `
import React from 'react';
import { HeaderBar, Icon } from 'quark-components';

const navLinks = [
  <a key="home" href="#">Home</a>,
  <a key="features" href="#">Features</a>,
  <a key="pricing" href="#">Pricing</a>,
  <a key="about" href="#">About</a>
];

<HeaderBar title="HeaderBar Title" navLinks={navLinks}>
  <Icon value="menu" width="23px" />
</HeaderBar>
`;

export const HeaderBarCode = (): React.ReactElement => (
  <DocsCodeBlock>{code}</DocsCodeBlock>
);
