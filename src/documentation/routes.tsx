import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { DocsHome } from '../components/Docs/DocsHome';
import { DocsExampleBlock } from '../components/Docs/DocsExampleBlock';

import { componentData } from './componentData';

import style from '../components/Docs/Docs.css';

const renderRoutes = () => {
  return componentData.map(
    ({ name, component, description, propDetails, code }) => (
      <Route
        key={name}
        path={`/${name.toLowerCase()}`}
        render={() => (
          <div className={style.exampleContainer}>
            <DocsExampleBlock
              name={name}
              description={description}
              propDetails={propDetails}
            >
              {component()}
            </DocsExampleBlock>
            {code()}
          </div>
        )}
      />
    )
  );
};

export const routes = (
  <Switch>
    {renderRoutes()}
    <Route exact path="/" component={DocsHome} />
    <Route render={() => <p style={{ padding: '25px' }}>Not Found</p>} />
  </Switch>
);
