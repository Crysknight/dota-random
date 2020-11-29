import { SET_HEROES } from '@/constants';

export default {
  [SET_HEROES](state, heroes) {
    state.heroes = heroes;
  },
};
