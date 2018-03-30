import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ name, avatar_url, description, html_url }) => {
  return (
    <div>
      {avatar_url && <div><img src={avatar_url} alt={name} style={{height: 100}}/></div>}
      <div>{name}</div>
      {description && <div>{description}</div>}
      {html_url && <div><a href={html_url}>{html_url}</a></div>}
    </div>
  );
};

Card.proptypes = {
  name: PropTypes.string.isRequired,
  avatar_url: PropTypes.string,
  location: PropTypes.string,
  html_url: PropTypes.string
};

export default Card;
