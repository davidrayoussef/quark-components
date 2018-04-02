import React from 'react';
import PropTypes from 'prop-types';
import style from './Card.css';

const Card = ({ avatar_url, name, description, linkSrc }) => {
  const styles = {
    borderRadius: !avatar_url.endsWith('svg') ? '50%' : 0
  };

  return (
    <div className={style.card}>
      { avatar_url && <div><img src={avatar_url} alt={name} style={styles}/></div> }
      <h3>{name}</h3>
      {description && <div>{description}</div>}
      {linkSrc && <div><a href={linkSrc}>{linkSrc.replace(/https?:\/\//, '')}</a></div>}
    </div>
  );
};

Card.proptypes = {
  avatar_url: PropTypes.string,
  name: PropTypes.string.isRequired,
  location: PropTypes.string,
  linkSrc: PropTypes.string
};

export default Card;
