import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import DocsSample from './componentSamples/DocsSample/DocsSample';
import FetcherSample from './componentSamples/FetcherSample/FetcherSample';
import HeaderBarSample from './componentSamples/HeaderBarSample/HeaderBarSample';
import ListSample from './componentSamples/ListSample/ListSample';

const componentList = ['Docs', 'Fetcher', 'HeaderBar', 'List'];

const routes = () => {
  return (
    <Fragment>
      <Route exact path={'/docs'} component={DocsSample} />
      <Route exact path={'/fetcher'} component={FetcherSample} />
      <Route exact path={'/header-bar'} component={HeaderBarSample} />
      <Route exact path={'/list'} component={ListSample} />
    </Fragment>
  );
};

export { componentList, routes };
