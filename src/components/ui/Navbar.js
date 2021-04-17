import { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { authTypes } from '../types/types';

const Navbar = () => {
  const history = useHistory();
  const { user, dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: authTypes.LOGOUT });
    history.replace('/login');
  };

  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
      <Link className='navbar-brand' to='/'>
        Asociaciones
      </Link>

      <div className='navbar-collapse'>
        <div className='navbar-nav'>
          <NavLink
            activeClassName='active'
            className='nav-item nav-link'
            exact
            to='/marvel'
          >
            Marvel
          </NavLink>

          <NavLink
            activeClassName='active'
            className='nav-item nav-link'
            exact
            to='/dc'
          >
            DC
          </NavLink>

          <NavLink
            activeClassName='active'
            className='nav-item nav-link'
            exact
            to='/search'
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className='navbar-collapse collapse w-100 order-3 dual-collapse2'>
        <ul className='navbar-nav ms-auto me-2'>
          <p className='text-info nav-item nav-link mb-0'>{user.name}</p>
          <button onClick={handleLogout} className=' btn nav-item nav-link'>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
