import { SET_ITEMS } from '@/constants';

import items from '@/data/items.json';
import { NEEDLESS_ITEMS } from '@/constants';

export default {
  setItems({ commit }) {
    commit(
      SET_ITEMS,
      items.filter(({ recipe, name }) => {
        return (
          !NEEDLESS_ITEMS.includes(name) &&
          !recipe
        );
      }),
    );
  },
};
