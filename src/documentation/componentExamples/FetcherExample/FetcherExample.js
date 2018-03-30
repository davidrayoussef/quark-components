import React, { Fragment } from 'react';
import Fetcher from '../../../components/Fetcher/Fetcher';
import Loader from '../../../components/Loader/Loader';
import Card from '../../../components/Card/Card';

const FetcherExample = () => (
  <Fragment>
    <section className="examples">
      <Fetcher
        loader={<Loader />}
        url="https://api.github.com/users/davidrayoussef"
        render={(data) => (
          <Card {...data} />
        )}
      />
    </section>
    <section className="editor">

    </section>
  </Fragment>
);

export default FetcherExample;
