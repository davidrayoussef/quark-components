import React from 'react';
import { withRouter } from 'react-router';

import { Button } from './Button';

import { ButtonSize, LinkButtonProps } from '../../shared';

const LinkButton: React.FC<LinkButtonProps> = ({
  history,
  location,
  match,
  staticContext,
  to,
  children,
  onClick,
  ...rest
}: LinkButtonProps) => {
  return (
    <Button
      {...rest}
      size={ButtonSize.Small}
      onClick={() => {
        history.push(to);
      }}
    >
      {children}
    </Button>
  );
};

export const RouterLinkButton = withRouter(LinkButton);
