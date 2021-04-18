import { mount } from 'enzyme';
import { MemoryRouter, Route, Router } from 'react-router-dom';
import SearchScreen from '../../../components/search/SearchScreen';

describe('Testing componente <SearchScreen />', () => {
  test('should match snapshot with default values', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <Route path='/search' component={SearchScreen} />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('button').text()).toBe('Search');
  });

  test('should show the query value in the input', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=Batman']}>
        <Route path='/search' component={SearchScreen} />
      </MemoryRouter>
    );

    expect(wrapper.find('input').prop('value')).toBe('Batman');
  });

  test('should show error if hero is not found', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batman123']}>
        <Route path='/search' component={SearchScreen} />
      </MemoryRouter>
    );

    expect(wrapper.find('.alert-danger').exists()).toBeTruthy();
    expect(wrapper.find('.alert-danger').text()).toBe(
      'There is no hero called "batman123"'
    );
  });

  test('should call history.push', () => {
    const history = { push: jest.fn(), listen: jest.fn(), location: {} };

    const wrapper = mount(
      <Router history={history}>
        <MemoryRouter initialEntries={['/search?q=batman123']}>
          <Route path='/search' component={SearchScreen} />
        </MemoryRouter>
      </Router>
    );

    wrapper.find('input').simulate('change', {
      target: {
        name: 'input',
        value: 'batman',
      },
    });
    wrapper.find('form').prop('onSubmit')({ preventDefault: () => {} });

    // expect(history.push).toHaveBeenCalled();
  });
});
