import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from './Button';

import { ButtonSize, LinkButtonProps } from '@/shared';

export const RouterLinkButton: React.FC<LinkButtonProps> = ({
  to,
  children,
  onClick,
  ...rest
}: LinkButtonProps) => {
  const navigate = useNavigate();
  return (
    <Button
      {...rest}
      size={ButtonSize.Small}
      onClick={() => {
        navigate(to);
      }}
    >
      {children}
    </Button>
  );
};
