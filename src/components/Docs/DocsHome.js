import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '../Grid/Grid';
import Card from '../Card/Card';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import { componentData } from '../../documentation/componentData.js';
import style from './DocsHome.css';

const cards = componentData.map(({ name, description }) => (
  <Card
    key={name}
    style={{ background: 'white', maxWidth: 'unset', position: 'relative' }}
    name={name}
    description={description}
  >
    <div className={style['button-container']}>
      <a
        className={style.icon}
        href={`https://github.com/davidrayoussef/react-simple-ui-components/tree/master/src/components/${name}`}
      >
        <Icon value="github" />
      </a>
      <Link to={name.toLowerCase()}>
        <Button size="small">View</Button>
      </Link>
    </div>
  </Card>
));

const DocsHome = () => (
  <Grid
    cols="repeat(auto-fill, minmax(250px, 1fr))"
    rows="auto"
    style={{ margin: 10 }}
  >
    { cards }
  </Grid>
);

export default DocsHome;
