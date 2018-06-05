import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import DocsExampleBlock from '../components/Docs/DocsExampleBlock';
import { componentData } from './componentData';
import Landing from './Landing';

const renderRoutes = () => {
  return componentData.map(({ name, component, description, propDescriptions, code }) => (
    <Route
      key={name}
      path={'/' + name.toLowerCase()}
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
    <Route path="/" component={Landing} />
    <Route render={() => <p style={{ padding: '25px' }}>Not Found</p>} />
  </Switch>
);

export { routes };
