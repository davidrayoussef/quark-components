import React from 'react';
import DocsCodeBlock from '../../../components/Docs/DocsCodeBlock';

const code = `
import React from 'react';
import NavMenu from '{yourpath}/NavMenu';

<NavMenu
  menuTitle="NavMenu Items"
  linkColor="red"
  linkType="anchorLink"
  data={[
    { name: 'NavMenu Item 1' },
    { name: 'NavMenu Item 2' },
    { name: 'NavMenu Item 3' },
    { name: 'NavMenu Item 4' },
    { name: 'NavMenu Item 5' }
  ]}
/>
`;

const NavMenuCode = () => (
  <DocsCodeBlock>
    {code}
  </DocsCodeBlock>
);

export default NavMenuCode;
