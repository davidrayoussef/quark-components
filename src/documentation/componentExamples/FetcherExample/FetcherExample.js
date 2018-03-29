import React from 'react';
import Fetcher from '../../../components/Fetcher/Fetcher';

const FetcherExample = () => (
  <Fetcher
    url="https://api.github.com/users/davidrayoussef"
    render={({ name, avatar_url, location, html_url }) => (
      <div>
        <div>{name}</div>
        <div><img src={avatar_url} alt={name} style={{height: 100}}/></div>
        <div>{location}</div>
        <div><a href={html_url}>{html_url}</a></div>
      </div>
    )}
  />
);

export default FetcherExample;