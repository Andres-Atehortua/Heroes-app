import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginScreen from '../components/login/LoginScreen';

import DashboardRoutes from './DashboardRoutes';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/login'>
            <LoginScreen />
          </Route>
          <DashboardRoutes />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
