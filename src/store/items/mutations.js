import { SET_ITEMS } from '@/constants';

export default {
  [SET_ITEMS](state, items) {
    state.items = items;
  },
};
