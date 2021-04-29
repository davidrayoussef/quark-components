import React, { Fragment } from 'react';

import { Table } from '../Table';

import { DocsExampleBlockProps } from '../../shared';

import style from './DocsExampleBlock.css';

export const DocsExampleBlock: React.FC<DocsExampleBlockProps> = ({
  name,
  description,
  propDetails,
  children
}: DocsExampleBlockProps) => (
  <section className={style.examples}>
    <h2>{name}</h2>
    <p className={style.description}>{description}</p>
    <div className={style.example}>{children}</div>
    {propDetails.length > 0 && (
      <Fragment>
        <h3>Props</h3>
        <Table
          tableHeads={['Name', 'Type', 'Default', 'Description']}
          tableData={propDetails}
        />
      </Fragment>
    )}
  </section>
);
