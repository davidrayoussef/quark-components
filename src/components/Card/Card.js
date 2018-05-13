import React from 'react';
import PropTypes from 'prop-types';
import style from './Card.css';

const Card = ({ avatarSrc, name, description, url }) => {
  const styles = {
    borderRadius: typeof avatarSrc === 'string' && !avatarSrc.endsWith('svg') ? '50%' : 0
  };

  return (
    <div className={style.card}>
      { avatarSrc && <img src={avatarSrc} alt={name} style={styles}/> }
      <h3>{name}</h3>
      {description && <p className={style.description}>{description}</p>}
      {url && <a href={url}>{url.replace(/https?:\/\//, '')}</a>}
    </div>
  );
};

Card.propTypes = {
  avatarSrc: PropTypes.string,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  url: PropTypes.string
};

export default Card;
