import React from 'react';
import Fetcher from '../../../components/Fetcher/Fetcher';
import Loader from '../../../components/Loader/Loader';
import Card from '../../../components/Card/Card';

export const FetcherExample = () => (
  <Fetcher
    loader={Loader}
    url="https://api.github.com/users/davidrayoussef"
    render={({ name, avatar_url, location, html_url }) => (
      <Card
        name={name}
        avatarSrc={avatar_url}
        description={location}
        url={html_url}
      />
    )}
  />
);
