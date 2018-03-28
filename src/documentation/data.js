import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DocsExample from './componentExamples/DocsExample/DocsExample';
import FetcherExample from './componentExamples/FetcherExample/FetcherExample';
import HeaderBarExample from './componentExamples/HeaderBarExample/HeaderBarExample';
import ListExample from './componentExamples/ListExample/ListExample';

const componentList = [
  {
    name: 'Docs'
  },
  {
    name: 'Fetcher'
  },
  {
    name: 'HeaderBar'
  },
  {
    name: 'List'
  }
];

const routes = () => {
  return (
    <Switch>
      <Route path={'/docs'} component={DocsExample} />
      <Route path={'/fetcher'} component={FetcherExample} />
      <Route path={'/headerbar'} component={HeaderBarExample} />
      <Route path={'/list'} component={ListExample} />
      <Route render={() => <p>Not Found</p>} />
    </Switch>
  );
};

export { componentList, routes };
