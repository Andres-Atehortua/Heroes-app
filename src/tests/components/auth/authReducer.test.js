import { authReducer } from '../../../components/auth/authReducer';
import { authTypes } from '../../../components/types/types';

describe('Test al reducer authReducer', () => {
  const defaultUser = {};
  test('should return the default state', () => {
    const reducer = authReducer(defaultUser, {});

    expect(reducer).toEqual(defaultUser);
  });

  test('should authenticate and set the name of user', () => {
    const newUser = { name: 'Andres' };
    const reducer = authReducer(defaultUser, {
      type: authTypes.LOGIN,
      payload: newUser,
    });

    expect(reducer).toEqual({ logged: true, name: newUser.name });
  });

  test('should remove the name of user and set logged in false', () => {
    const prevUser = { name: 'Andres', logged: true };
    const reducer = authReducer(prevUser, {
      type: authTypes.LOGOUT,
    });

    expect(reducer).toEqual({ logged: false });
  });
});
