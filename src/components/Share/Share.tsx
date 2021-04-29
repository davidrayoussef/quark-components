import React from 'react';

import { Icon } from '../Icon';

import { ShareProps } from '../../shared';

import style from './Share.css';

export const Share: React.VFC<ShareProps> = ({
  shares,
  url,
  title,
  text
}: ShareProps) => {
  const [encodedUrl, encodedTitle, encodedText] = [
    encodeURIComponent(url),
    encodeURIComponent(title),
    encodeURIComponent(text)
  ];
  const formatShareLink = (type: string) => {
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
      default:
        throw new Error('Incorrect type.');
    }
  };
  const renderedShares = shares.map(item => {
    return (
      <a
        key={item}
        href={formatShareLink(item)}
        className={style[item]}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon value={item} width="20" />
        <span>
          {item === 'twitter' ? 'Tweet' : item === 'email' ? 'Email' : 'Share'}
        </span>
      </a>
    );
  });
  return <div className={style.buttonGroup}>{renderedShares}</div>;
};
