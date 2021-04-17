import { Redirect, Route } from 'react-router';
import PropTypes from 'prop-types';

const PrivateRoutes = ({ isAuthenticated, children, ...rest }) => {
  localStorage.setItem('lastPage', rest.location.pathname);

  console.log(rest.location.pathname);
  return (
    <Route {...rest}>
      {isAuthenticated ? children : <Redirect to='/login' />}
    </Route>
  );
};

PrivateRoutes.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default PrivateRoutes;
