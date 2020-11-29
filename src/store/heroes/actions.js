import { SET_HEROES } from '@/constants';

import heroes from '@/data/heroes.json';

export default {
  setHeroes({ commit }) {
    commit(SET_HEROES, heroes);
  },
};
