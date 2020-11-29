import {
  NEEDLESS_STARTER_ITEMS,
  BUILD_ITEMS,
  BOOTS,
} from '@/constants';

export default {
  starterItems({ items }) {
    return items.filter(({ cost, name }) => {
      return (
        cost <= 500 &&
        !NEEDLESS_STARTER_ITEMS.includes(name)
      );
    });
  },
  buildItems: ({ items }, _g, { route }) => (withBoots = true) => {
    const buildItemsCollection = items.filter(({ name }) => {
      return (
        BUILD_ITEMS.includes(name) ||
        (withBoots && BOOTS.includes(name))
      );
    });

    const { seed } = route.params;
  },
  boots({ items }) {
    return items.filter(({ name }) => BOOTS.includes(name));
  },
};
