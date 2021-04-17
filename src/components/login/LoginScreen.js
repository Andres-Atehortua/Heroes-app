import { useContext } from 'react';
import { useHistory } from 'react-router';
import { AuthContext } from '../auth/AuthContext';
import { authTypes } from '../types/types';

const LoginScreen = () => {
  const { dispatch } = useContext(AuthContext);

  const history = useHistory();

  const handleLogin = () => {
    dispatch({ type: authTypes.LOGIN, payload: { name: 'Andrés' } });

    history.replace('/');
  };

  return (
    <div className='container mt-5'>
      <h1>Login</h1>
      <hr />

      <button className='btn btn-primary' onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
