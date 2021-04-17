import React from 'react';
import { Redirect, Route } from 'react-router';
import PropTypes from 'prop-types';

const PublicRoute = ({ isAuthenticated, children, ...rest }) => {
  return (
    <Route {...rest}>{isAuthenticated ? <Redirect to='/' /> : children}</Route>
  );
};

PublicRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};
export default PublicRoute;
