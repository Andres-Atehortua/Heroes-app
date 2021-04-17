import { useContext } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { AuthContext } from '../components/auth/AuthContext';
import LoginScreen from '../components/login/LoginScreen';

import DashboardRoutes from './DashboardRoutes';
import PrivateRoutes from './PrivateRoutes';
import PublicRoute from './PublicRoute';

const AppRouter = () => {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute exact path='/login' isAuthenticated={user.logged}>
            <LoginScreen />
          </PublicRoute>

          <PrivateRoutes path='/' isAuthenticated={user.logged}>
            <DashboardRoutes />
          </PrivateRoutes>
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
