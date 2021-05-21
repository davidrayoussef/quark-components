import React from 'react';

import { HeaderBar } from '../../../components/HeaderBar';
import { Icon } from '../../../components/Icon';

const navLinks = [
  <a key="home" href="#">
    Home
  </a>,
  <a key="features" href="#">
    Features
  </a>,
  <a key="pricing" href="#">
    Pricing
  </a>,
  <a key="about" href="#">
    About
  </a>
];

export const HeaderBarExample = (): React.ReactElement => (
  <HeaderBar title="HeaderBar Title" navLinks={navLinks}>
    <Icon value="menu" width="23px" viewBox="0 0 30 30" />
  </HeaderBar>
);
