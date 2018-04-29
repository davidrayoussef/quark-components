import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import DocsPropTable from './DocsPropTable';
import style from './DocsExampleBlock.css';

const DocsExampleBlock = ({ name, description, propDescriptions, children }) => (
  <section className={style.examples}>
    <h2>{name}</h2>
    <p className={style.description}>{description}</p>
    <div className={style.example}>
      {children}
    </div>
    {
      propDescriptions.length > 0 &&
        <Fragment>
          <h3>Props</h3>
          <DocsPropTable propDescriptions={propDescriptions}/>
        </Fragment>
    }
  </section>
);

DocsExampleBlock.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  propDescriptions: PropTypes.array.isRequired,
  children: PropTypes.node.isRequired
};

export default DocsExampleBlock;
