import React from 'react';

import { Grid } from '../Grid';
import { Card } from '../Card';
import { RouterLinkButton } from '../Button';
import { Icon } from '../Icon';

import { componentData } from '../../documentation/componentData';

import style from './DocsHome.css';

const cards = componentData.map(
  ({ name, description }: { name: string; description: string }) => (
    <Card
      key={name}
      style={{ background: 'white', maxWidth: 'unset', position: 'relative' }}
      title={name}
      description={description}
    >
      <div className={style.buttonContainer}>
        <a
          className={style.icon}
          href={`https://github.com/davidrayoussef/quark-components/tree/master/src/components/${name}`}
        >
          <Icon value="github" width="25" color="rgba(0, 0, 0, .2)" />
        </a>
        <RouterLinkButton to={name.toLowerCase()}>View</RouterLinkButton>
      </div>
    </Card>
  )
);

export const DocsHome = (): React.ReactElement => (
  <Grid
    cols="repeat(auto-fill, minmax(250px, 1fr))"
    rows="auto"
    style={{ margin: 10, width: '100%' }}
  >
    {cards}
  </Grid>
);
