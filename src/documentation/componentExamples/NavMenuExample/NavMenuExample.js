import React from 'react';
import NavMenu from '../../../components/NavMenu/NavMenu';

export const NavMenuExample = () => (
  <NavMenu
    menuTitle="NavMenu Items"
    linkColor="rgb(33, 150, 243)"
    linkType="anchorLink"
    linkDisabled={true}
    data={[
      { name: 'NavMenu Item 1' },
      { name: 'NavMenu Item 2' },
      { name: 'NavMenu Item 3' },
      { name: 'NavMenu Item 4' },
      { name: 'NavMenu Item 5' }
    ]}
  />
);
