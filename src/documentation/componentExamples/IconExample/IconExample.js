import React, { Fragment } from 'react';
import Icon from '../../../components/Icon/Icon';

export const IconExample = () => (
  <Fragment>
    <Icon value="email" color="gray" />
    <Icon value="facebook" color="#3B5998" />
    <Icon value="github" color="#24292e" />
    <Icon value="reddit" color="rgb(255, 69, 0)" />
    <Icon value="twitter" color="rgb(85, 172, 238)" />
    <Icon value="youtube" color="rgb(205, 32, 31)" />
  </Fragment>
);
