import React from 'react';
import PropTypes from 'prop-types';
import style from './Card.css';

const Card = ({ avatarSrc, name, description, linkSrc }) => {
  const styles = {
    borderRadius: typeof avatarSrc === 'string' && !avatarSrc.endsWith('svg') ? '50%' : 0
  };

  return (
    <div className={style.card}>
      { avatarSrc && <div><img src={avatarSrc} alt={name} style={styles}/></div> }
      <h3>{name}</h3>
      {description && <div className={style.description}>{description}</div>}
      {linkSrc && <a href={linkSrc}>{linkSrc.replace(/https?:\/\//, '')}</a>}
    </div>
  );
};

Card.propTypes = {
  avatarSrc: PropTypes.string,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  linkSrc: PropTypes.string
};

export default Card;
