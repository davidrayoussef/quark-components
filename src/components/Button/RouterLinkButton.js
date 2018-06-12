import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import Button from './Button';

const RouterLinkButton = ({ history, location, match, staticContext, to, onClick, /* <-- remove unusable props */ ...rest }) => {
  return (
    <Button
      {...rest}
      size="small"
      onClick={(e) => {
        history.push(to);
      }}
    />
  );
};

RouterLinkButton.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  staticContext: PropTypes.string,
  to: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node
};

export default withRouter(RouterLinkButton);
