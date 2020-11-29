<template>
  <div class="dr-home">
    <Heroes indeterminate />
    <div
      class="dr-home__set-seed"
      @click="setSeed"
    >Roll</div>
  </div>
</template>

<script>
import { Heroes } from '@/components';

export default {
  name: 'Home',
  components: { Heroes },
  methods: {
    setSeed() {
      const seed = Math.random().toString(36).substr(2, 9);

      this.$router.push({
        name: 'Seed',
        params: { seed },
      });
    },
  },
};
</script>

<style lang="scss">
.dr-home {
  height: 100%;

  &__set-seed {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    position: absolute;
    right: 40px;
    bottom: 40px;
    border-radius: 4px;
    box-shadow: 0px 0px 4px 2px rgba(255, 255, 255, 0.2);
    background-image: url(~@/assets/chaos_strike.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
    text-shadow: 0 0 4px rgba(0, 0, 0, 0.8);
    color: white;
    cursor: pointer;
    transition: all 0.15s;

    &:hover {
      box-shadow: 0px 0px 4px 4px rgba(255, 255, 255, 0.2);
    }
  }
}
</style>
