<template>
  <Container id="join" title="Join">
    <button @click="addLocation"/>
    <article v-for="(location, idx) in locations" :key="idx">
      {{ location.name }}
    </article>
  </Container>
</template>

<script>
import { firebaseDb } from '../main.js';
import { getRandomInt } from '../utils/random.js';

export default {
  name: 'Join',
  data() {
    return {
      locations: [],
    };
  },
  firestore() {
    return {
      // locations: firebaseDb.collection('matches').orderBy('createdAt'),
    };
  },
  methods: {
    addLocation() {
      const name = `legend${getRandomInt(0, 9999)}`;
      // const createdAt = new Date();
      firebaseDb.collection('matches').add({
        name,
        // createdAt,
      });
    },
  },
};
</script>

<style lang="scss">
</style>
