import React from 'react';
import Fetcher from '../../../components/Fetcher/Fetcher';
import Loader from '../../../components/Loader/Loader';
import Card from '../../../components/Card/Card';

const FetcherExample = () => (
  <Fetcher
    loader={Loader}
    url="https://api.github.com/users/davidrayoussef"
    render={({ html_url, location, ...data }) => (
      <Card {...data} linkSrc={html_url} description={location} />
    )}
  />
);

export default FetcherExample;
