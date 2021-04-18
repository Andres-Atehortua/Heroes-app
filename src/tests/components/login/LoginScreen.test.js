import { mount } from 'enzyme';
import { Router } from 'react-router';
import { AuthContext } from '../../../components/auth/AuthContext';
import LoginScreen from '../../../components/login/LoginScreen';
import { authTypes } from '../../../components/types/types';

describe('Test component <LoginScreen />', () => {
  test('should match snapshot', () => {
    const contextValue = {
      user: { logged: false },
      dispatch: jest.fn(),
    };

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <LoginScreen />
      </AuthContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should dispatch and navigate', () => {
    const contextValue = {
      user: { logged: false },
      dispatch: jest.fn(),
    };
    const history = {
      push: jest.fn(),
      replace: jest.fn(),
      listen: jest.fn(),
      location: {},
    };

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <Router history={history}>
          <LoginScreen />
        </Router>
      </AuthContext.Provider>
    );

    const button = wrapper.find('button').prop('onClick');

    button();
    expect(contextValue.dispatch).toHaveBeenCalledWith({
      type: authTypes.LOGIN,
      payload: { name: 'Andrés' },
    });
    expect(history.replace).toHaveBeenCalled();

    localStorage.setItem('lastPage', '/dc');
    button();
    expect(history.replace).toHaveBeenCalledWith('/dc');
  });
});
