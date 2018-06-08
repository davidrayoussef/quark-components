import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '../Grid/Grid';
import Card from '../Card/Card';
import Button from '../Button/Button';
import { componentData } from '../../documentation/componentData.js';

const cards = componentData.map(({ name, description }) => (
  <Card
    key={name}
    style={{ background: 'white', maxWidth: 'unset' }}
    name={name}
    description={description}
  >
    <Link to={name.toLowerCase()} style={{ marginTop: 'auto' }}>
      <Button size="small" style={{ marginTop: 20 }}>View</Button>
    </Link>
  </Card>
));

const DocsHome = () => (
  <Grid cols="repeat(auto-fill, minmax(250px, 1fr))" rows="auto">
    { cards }
  </Grid>
);

export default DocsHome;
