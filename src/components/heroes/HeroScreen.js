import { useMemo } from 'react';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

const HeroScreen = () => {
  const { heroId } = useParams();

  const hero = useMemo(() => getHeroById(heroId), [heroId]);
  const history = useHistory();

  if (!hero) {
    return <Redirect to='/' />;
  }

  const handleReturn = () => {
    history.push(`/${heroId.split('-')[0]}`);
  };

  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero;

  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img
          className='img-thumbnail animate__animated animate__fadeInLeft'
          src={`../assets/${heroId}.jpg`}
          alt={superhero}
        />
      </div>
      <div className='col-8 animate__animated animate__fadeInUp'>
        <h3>{superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <b>Alter ego:</b> {alter_ego}
          </li>
          <li className='list-group-item'>
            <b>Publisher:</b> {publisher}
          </li>
          <li className='list-group-item'>
            <b>First appearance:</b> {first_appearance}
          </li>
        </ul>
        <h5>Characters</h5>
        <p>{characters}</p>

        <button onClick={handleReturn} className='btn btn-outline-info'>
          Return
        </button>
      </div>
    </div>
  );
};

export default HeroScreen;
