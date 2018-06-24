import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import style from './Share.css';

const Share = ({ shares, url, title, text }) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedText = encodeURIComponent(text);

  const formatShareLink = (type) => {
    switch (type) {
      case 'twitter': {
        return `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`;
      }
      case 'facebook': {
        return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
      }
      case 'email': {
        return `mailto:?subject=${encodedTitle}&body=${encodedText}%0D%0A${encodedUrl}`;
      }
      default: throw new Error('Incorrect type.');
    }
  };

  const renderedShares = shares.map(item => {
    return (
      <a 
        key={item} 
        href={formatShareLink(item)}
        className={style[`${item}`]}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon value={item} width="20" />
        <span>{item === 'twitter' ? 'Tweet' : item === 'email' ? 'Email' : 'Share'}</span>
      </a>
    );
  });

  return (
    <div className={style['button-group']}>
      {renderedShares}
    </div>
  );
};

Share.propTypes = {
  shares: PropTypes.arrayOf(PropTypes.string).isRequired,
  url: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired,
  title: PropTypes.string,
  text: PropTypes.string.isRequired
};

export default Share;