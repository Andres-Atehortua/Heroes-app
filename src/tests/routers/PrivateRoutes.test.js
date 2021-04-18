import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import PrivateRoutes from '../../routers/PrivateRoutes';

describe('Testing the component <PrivateRoutes/>', () => {
  const props = { location: { pathname: '/marvel' } };
  Storage.prototype.setItem = jest.fn();

  test('should show the component if the user is authenticated and save in localStorage', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoutes isAuthenticated={true} {...props}>
          <span>Soy un componente</span>
        </PrivateRoutes>
      </MemoryRouter>
    );

    expect(wrapper.find('span').exists()).toBe(true);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'lastPage',
      props.location.pathname
    );
  });

  test('should not show the component if user is not authenticated', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoutes isAuthenticated={false} {...props}>
          <span>Soy un componente</span>
        </PrivateRoutes>
      </MemoryRouter>
    );

    expect(wrapper.html()).toBe('');
  });
});
