import React from 'react';
import NavMenu from '../../../components/NavMenu/NavMenu';

const NavMenuExample = () => (
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
);

export default NavMenuExample;
