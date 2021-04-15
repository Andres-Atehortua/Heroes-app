import { heroes } from '../data/Heroes';

export const getHeroByName = (name) => {
  return name
    ? heroes.filter((hero) => hero.superhero.toLowerCase().includes(name))
    : [];
};
