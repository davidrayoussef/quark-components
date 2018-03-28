import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import DocsExample from './componentExamples/DocsExample/DocsExample';
import FetcherExample from './componentExamples/FetcherExample/FetcherExample';
import HeaderBarExample from './componentExamples/HeaderBarExample/HeaderBarExample';
import ListExample from './componentExamples/ListExample/ListExample';

const componentList = ['Docs', 'Fetcher', 'HeaderBar', 'List'];

const routes = () => {
  return (
    <Fragment>
      <Route exact path={'/docs'} component={DocsExample} />
      <Route exact path={'/fetcher'} component={FetcherExample} />
      <Route exact path={'/header-bar'} component={HeaderBarExample} />
      <Route exact path={'/list'} component={ListExample} />
    </Fragment>
  );
};

export { componentList, routes };
