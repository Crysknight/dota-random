<template>
  <div class="dr-hero">
    <div class="dr-hero__pic" :style="picStyle"></div>
    <div class="dr-hero__title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    hero: Object,
  },
  computed: {
    picStyle() {
      if (!this.hero) {
        return null;
      }

      const heroName = this.hero.name.replace(/npc_dota_hero_/, '');
      const heroLink = `http://cdn.dota2.com/apps/dota2/images/heroes/${heroName}_lg.png`;

      return {
        'background-image': `url(${heroLink})`,
      };
    },
    title() {
      return this.hero?.localized_name;
    },
  },
};
</script>

<style lang="scss">
.dr-hero {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 15px;
  color: white;

  &__pic {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 204px;
    height: 115px;
    border-radius: 5px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    box-shadow: 0 0 2px 3px rgba(255, 255, 255, 0.2);
    background-color: rgba(255, 255, 255, 0.2);
    font-size: 72px;
    color: rgba(255, 255, 255, 0.5);
  }

  &__title {
    margin-top: 20px;
    font-size: 24px;
    text-transform: uppercase;
  }
}
</style>
