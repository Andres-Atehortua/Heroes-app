import { mount } from 'enzyme';
import { AuthContext } from '../../components/auth/AuthContext';
import AppRouter from '../../routers/AppRouter';

describe('Testing the component <AppRouter />', () => {
  const contextValue = {
    user: { logged: false },
    dispatch: jest.fn(),
  };
  test('should show login if user is not logged', () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper.find('h1').text()).toBe('Login');
    expect(wrapper).toMatchSnapshot();
  });

  test('should show <<MarvelScreen /> if user is logged', () => {
    const user = { name: 'andres', logged: true };
    const wrapper = mount(
      <AuthContext.Provider value={{ user }}>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper.find('h1').text()).toBe('Marvel Screen');
    expect(wrapper.find('.navbar').exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
});
