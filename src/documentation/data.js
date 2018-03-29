import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DocsExample from './componentExamples/DocsExample/DocsExample';
import FetcherExample from './componentExamples/FetcherExample/FetcherExample';
import HeaderBarExample from './componentExamples/HeaderBarExample/HeaderBarExample';
import ListExample from './componentExamples/ListExample/ListExample';
import NavMenuExample from './componentExamples/NavMenuExample/NavMenuExample';

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
  },
  {
    name: 'NavMenu'
  }
];

const routes = () => {
  return (
    <Switch>
      <Route path={'/docs'} component={DocsExample} />
      <Route path={'/fetcher'} component={FetcherExample} />
      <Route path={'/headerbar'} component={HeaderBarExample} />
      <Route path={'/list'} component={ListExample} />
      <Route path={'/navmenu'} component={NavMenuExample} />
      <Route render={() => <p>Not Found</p>} />
    </Switch>
  );
};

export { componentList, routes };
