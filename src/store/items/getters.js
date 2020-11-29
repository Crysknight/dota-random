import { NEEDLESS_STARTER_ITEMS } from '@/constants';

export default {
  starterItems({ items }) {
    return items.filter(({ cost, name }) => {
      return (
        cost <= 500 &&
        !NEEDLESS_STARTER_ITEMS.includes(name)
      );
    });
  },
};
