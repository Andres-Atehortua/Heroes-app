import { mount } from 'enzyme';
import { Router, MemoryRouter, Route } from 'react-router-dom';

import HeroScreen from '../../../components/heroes/HeroScreen';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: jest.fn(),
}));

describe('Testing component <HeroScreen />', () => {
  const historyMock = {
    pathname: {},
    push: jest.fn(),
    listen: jest.fn(),
    location: {},
    replace: jest.fn(),
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should show <Redirect /> if arguments are not passed', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero']}>
        <HeroScreen />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('Redirect').exists()).toBe(true);
  });

  test('should show a hero if param exist', () => {
    const wrapper = mount(
      <Router history={historyMock}>
        {/* Con lo de abajo simulamos parámetros */}
        <MemoryRouter initialEntries={['/hero/marvel-spider']}>
          <Route path='/hero/:heroId'>
            <HeroScreen />
          </Route>
        </MemoryRouter>
      </Router>
    );

    expect(wrapper.find('.row').exists()).toBe(true);
  });

  test('should go to the back section when press back', () => {
    // const history = {
    //   push: jest.fn(),
    //   listen: jest.fn(),
    //   replace: jest.fn(),
    //   location: {},
    // };
    // const wrapper = mount(
    //   // <Router history={history}>
    //   <MemoryRouter initialEntries={['/hero/marvel-spider']}>
    //     <Route path='/hero/:heroId'>
    //       <HeroScreen />
    //     </Route>
    //   </MemoryRouter>
    //   // </Router>
    // );
    // wrapper.find('button').simulate('click');
    // expect(history.push).toHaveBeenCalled();
  });
});
