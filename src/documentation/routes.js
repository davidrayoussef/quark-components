import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import DocsExampleBlock from '../components/Docs/DocsExampleBlock';
import { componentData } from './componentData';

const renderRoutes = () => {
  return componentData.map(({ name, component, code }) => (
    <Route
      key={name}
      path={'/' + name.toLowerCase()}
      render={() => (
        <Fragment>
          <DocsExampleBlock name={name}>
            { component() }
          </DocsExampleBlock>
          { code() }
        </Fragment>
      )}
    />
  ));
};

const routes = (
  <Switch>
    <Route exact path={'/'} render={() => <h1>Getting Started</h1>} />
    { renderRoutes() }
    <Route render={() => <p>Not Found</p>} />
  </Switch>
);

export { routes };
