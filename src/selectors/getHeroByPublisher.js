import { heroes } from '../data/Heroes';

export const getHeroByPublisher = (publisher) => {
  const validPublishers = ['DC Comics', 'Marvel Comics'];

  if (!validPublishers.includes(publisher)) {
    throw new Error(`Publisher ${publisher} no válido`);
  }

  return heroes.filter((hero) => hero.publisher === publisher);
};
