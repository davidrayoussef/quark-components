import React from 'react';
import Fetcher from '../../../components/Fetcher/Fetcher';
import Loader from '../../../components/Loader/Loader';
import Card from '../../../components/Card/Card';

export const FetcherExample = () => (
  <Fetcher
    loader={Loader}
    url="https://api.github.com/users/davidrayoussef"
    render={({ html_url, location, ...data }) => (
      <Card linkSrc={html_url} description={location} {...data} />
    )}
  />
);
