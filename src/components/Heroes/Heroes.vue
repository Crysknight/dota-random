<template>
  <div class="dr-heroes">
    <template v-if="!isPlayer">
      <template v-if="indeterminate">
        <Hero
          v-for="number in 5"
          :key="number"
          class="dr-heroes__hero"
          indeterminate
        />
      </template>
      <template v-else>
        <router-link
          v-for="(hero, index) in seededHeroes"
          :key="hero.id"
          class="dr-heroes__hero-wrapper"
          :to="{ name: 'Player', params: { playerId: index + 1 } }"
        >
          <Hero
            class="dr-heroes__hero"
            :hero="hero"
          />
        </router-link>
      </template>
    </template>
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import Hero from './Hero';

export default {
  name: 'Heroes',
  components: { Hero },
  props: {
    indeterminate: Boolean,
  },
  computed: {
    isPlayer() {
      return this.$route.name === 'Player';
    },
    ...mapGetters('heroes', ['seededHeroes']),
  },
};
</script>

<style lang="scss">
.dr-heroes {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  height: 100%;

  &__hero-wrapper {
    display: flex;
    justify-content: center;
    width: 20%;
    height: 100%;
    transition: all 0.15s;
    text-decoration: none;
    color: white;

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }

  &__hero {
    position: relative;
    top: 10%;
    height: 90%;
  }
}
</style>
