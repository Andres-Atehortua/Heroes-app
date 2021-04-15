import { useMemo } from 'react';
import { useHistory, useLocation } from 'react-router';
import useForm from '../../hooks/useForm';
import { getHeroByName } from '../../selectors/getHeroByName';
import HeroCard from '../heroes/HeroCard';

const SearchScreen = () => {
  const history = useHistory();

  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const query = params.get('q');

  const { values, handleInputChange } = useForm({
    input: query || '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    history.push(`?q=${values.input}`);
  };

  const heroesFiltered = useMemo(() => getHeroByName(query), [query]);
  return (
    <div>
      <h1>Search Screen</h1>
      <hr />
      <div className='row'>
        <div className='col-5'>
          <h4>Search Form</h4>
          <hr />
          <form onSubmit={handleSubmit} className='d-grid gap-2'>
            <input
              className='form-control'
              type='text'
              placeholder='Find your hero'
              onChange={handleInputChange}
              value={values.input}
              name='input'
              autoComplete='off'
            />
            <button className='btn btn-outline-info mt-3'>Search</button>
          </form>
        </div>
        <div className='col-7'>
          <h4>Results</h4>
          <hr />

          {!query && <div className='alert alert-info'>Seach a hero</div>}
          {query && !heroesFiltered.length && (
            <div className='alert alert-danger'>
              There is no hero called "{query}"
            </div>
          )}

          {heroesFiltered.map((hero) => (
            <HeroCard {...hero} key={hero.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
