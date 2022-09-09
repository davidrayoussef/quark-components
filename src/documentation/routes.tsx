import React from 'react';
import { Route } from 'react-router-dom';

import { DocsHome } from '@/components/Docs/DocsHome';
import { DocsExampleBlock } from '@/components/Docs/DocsExampleBlock';

import { componentData } from './componentData';

import style from '@/components/Docs/Docs.scss';

const PageNotFound = () => {
  return <p style={{ padding: '25px' }}>Not Found</p>;
};

const componentRoutes = componentData.map(
  ({ name, component, description, propDetails, code }) => (
    <Route
      key={name}
      path={`/${name.toLowerCase()}`}
      element={
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
      }
    />
  )
);

export const routes = [
  ...componentRoutes,
  <Route key="home" path="/" element={<DocsHome />} />,
  <Route key="not-found" element={<PageNotFound />} />
];
