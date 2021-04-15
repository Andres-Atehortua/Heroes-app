import { Redirect, Route, Switch } from 'react-router';
import DcScreen from '../components/dc/DcScreen';
import HeroScreen from '../components/heroes/HeroScreen';
import MarvelScreen from '../components/marvel/MarvelScreen';
import SearchScreen from '../components/search/SearchScreen';
import Navbar from '../components/ui/Navbar';

const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className='container mt-2'>
        <Switch>
          <Route path='/marvel'>
            <MarvelScreen />
          </Route>

          <Route path='/hero/:heroId'>
            <HeroScreen />
          </Route>

          <Route path='/dc'>
            <DcScreen />
          </Route>
          <Route path='/search'>
            <SearchScreen />
          </Route>

          <Redirect to='/marvel' />
        </Switch>
      </div>
    </>
  );
};

export default DashboardRoutes;
