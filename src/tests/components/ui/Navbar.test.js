import { mount } from 'enzyme';
import { MemoryRouter, Router } from 'react-router';
import { AuthContext } from '../../../components/auth/AuthContext';
import { authTypes } from '../../../components/types/types';
import Navbar from '../../../components/ui/Navbar';

describe('Testing component <Navbar />', () => {
  const historyMock = {
    push: jest.fn(),
    replace: jest.fn(),
    location: {},
    listen: jest.fn(),
    createHref: jest.fn(),
  };

  const contextValue = {
    user: { name: 'andres', logged: true },
    dispatch: jest.fn(),
  };

  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter>
        <Router history={historyMock}>
          <Navbar />
        </Router>
      </MemoryRouter>
    </AuthContext.Provider>
  );

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.text-info').text()).toBe(contextValue.user.name);
  });

  test('should logout when press Logout button and use history', () => {
    wrapper.find('button').simulate('click');

    expect(contextValue.dispatch).toHaveBeenCalledWith({
      type: authTypes.LOGOUT,
    });
    expect(historyMock.replace).toHaveBeenCalledWith('/login');
  });
});
