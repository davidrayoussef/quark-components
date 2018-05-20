import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import DocsExampleBlock from '../components/Docs/DocsExampleBlock';
import { componentData } from './componentData';

const rootPath = process.env.NODE_ENV === 'production' ? '/react-simple-ui-components/' : '/';

const renderRoutes = () => {
  return componentData.map(({ name, component, description, propDescriptions, code }) => (
    <Route
      key={name}
      path={rootPath + name.toLowerCase()}
      render={() => (
        <Fragment>
          <DocsExampleBlock
            name={name}
            description={description}
            propDescriptions={propDescriptions}
          >
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
    { renderRoutes() }
    <Route path={rootPath} render={() => <h1 style={{ padding: '25px' }}>Getting Started</h1>} />
    <Route render={() => <p style={{ padding: '25px' }}>Not Found</p>} />
  </Switch>
);

export { routes };
