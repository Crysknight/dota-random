import Seedrandom from 'seedrandom';

export default {
  seededHeroes({ heroes }, _g, { route }) {
    const { seed } = route.params;
    if (!seed) {
      return [];
    }

    const generator = new Seedrandom(seed);
    const seededHeroes = [];
    while (seededHeroes.length < 5) {
      const step = generator();
      const index = Math.round(step * heroes.length);
      const hero = heroes[index];
      if (!seededHeroes.includes(hero)) {
        seededHeroes.push(hero);
      }
    }

    return seededHeroes;
  },
};
