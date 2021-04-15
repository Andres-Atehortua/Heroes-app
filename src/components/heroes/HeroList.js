import { getHeroByPublisher } from '../../selectors/getHeroByPublisher';
import HeroCard from './HeroCard';

const HeroList = ({ publisher }) => {
  const heroes = getHeroByPublisher(publisher);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}
    >
      {heroes.map(
        ({
          id,
          superhero,
          publisher,
          alter_ego,
          first_appearance,
          characters,
        }) => (
          <HeroCard
            id={id}
            superhero={superhero}
            publisher={publisher}
            alter_ego={alter_ego}
            first_appearance={first_appearance}
            characters={characters}
            key={id}
          >
            {superhero}
          </HeroCard>
        )
      )}
    </div>
  );
};

export default HeroList;
