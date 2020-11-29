<template>
  <div id="app" class="dr-app">
    <h1 class="dr-app__title">Dota Random</h1>
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'App',
  created() {
    this.setHeroes();
    this.setItems();
  },
  methods: {
    ...mapActions('heroes', ['setHeroes']),
    ...mapActions('items', ['setItems']),
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

.dr-app {
  height: 100%;
  padding: 1px 0;
  background-image: url(~@/assets/bg.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  &__title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-transform: uppercase;
    font-size: 72px;
    color: rgba(255, 255, 255, 0.2);
    pointer-events: none;
  }
}
</style>
