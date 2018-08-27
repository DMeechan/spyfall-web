<template>
  <div id="app">
    <Navigation></Navigation>
    <!-- <frosted-glass-container> -->
    <router-view/>
    <!-- </frosted-glass-container> -->
  </div>
</template>

<script>
import Navigation from '@/components/Navigation';

export default {
  name: 'app',
  components: {
    Navigation,
  },
};
</script>

<style lang="scss">
</style>
