import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { AuthContext } from '../../components/auth/AuthContext';
import DashboardRoutes from '../../routers/DashboardRoutes';

describe('Testing <DashboardRoutes />', () => {
  test('should match snapshot', () => {
    const valueContext = {
      user: { name: 'andres', logged: true },
      dispatch: jest.fn(),
    };

    const wrapper = mount(
      <AuthContext.Provider value={valueContext}>
        <MemoryRouter>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.navbar').exists()).toBe(true);
  });
});
