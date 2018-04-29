import React from 'react';
import PropTypes from 'prop-types';
import DocsPropTable from './DocsPropTable';
import style from './DocsExampleBlock.css';

const DocsExampleBlock = ({ name, description, children }) => (
  <section className={style.examples}>
    <h1>{name}</h1>
    <p className={style.description}>{description}</p>
    <div className={style.example}>
      {children}
    </div>
    <h2>Props</h2>
    <DocsPropTable />
  </section>
);

DocsExampleBlock.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node
};

export default DocsExampleBlock;
