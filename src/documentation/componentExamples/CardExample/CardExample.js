import React, { Fragment } from 'react';
import Card from '../../../components/Card/Card';
import CardCode from './CardCode';

const CardExample = () => (
  <Fragment>
    <section className="examples">
      <Card
        name="React"
        avatar_url="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
        description="A JavaScript library for building user interfaces."
        html_url="https://reactjs.org/"
      />
    </section>
    <CardCode />
  </Fragment>
);

export default CardExample;
