import React from 'react';

import { Icon } from '../../../components/Icon';
import { Grid } from '../../../components/Grid';

export const IconExample = (): React.ReactElement => (
  <Grid
    cols="repeat(auto-fill, minmax(50px, 1fr))"
    style={{ alignItems: 'center' }}
  >
    <Icon value="arrowRight" width="20" />
    <Icon value="arrowDown" width="20" />
    <Icon value="close" width="25" />
    <Icon value="email" width="30" />
    <Icon value="facebook" width="30" />
    <Icon value="github" width="30" />
    <Icon value="menu" width="30" viewBox="0 0 30 30" />
    <Icon value="reddit" width="30" />
    <Icon value="twitter" width="30" />
    <Icon value="youtube" width="30" />
  </Grid>
);
