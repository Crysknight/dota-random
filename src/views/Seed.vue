<template>
  <div class="dr-seed">
    <Heroes />
  </div>
</template>

<script>
import { Heroes } from '@/components';

export default {
  name: 'Seed',
  components: { Heroes },
  computed: {
    seed() {
      return this.$route.params.seed;
    },
  },
};
</script>

<style lang="scss">
.dr-seed {
  height: 100%;
}
</style>
