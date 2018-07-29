<template>
    <Container id="create" title="Create Game">
        <p>
            Player name
        </p>
        <input class="input" type="text" placeholder="Enter your player name">
        <p>
            Game Deck
        </p>
        <div class="buttons has-addons is-centered">
            <span
                :class="getClass('Spyfall 1')"
                @click="switchDeck">
                Spyfall 1
            </span>
            <span
                :class="getClass('Spyfall 2')"
                @click="switchDeck">
                Spyfall 2
            </span>
            </div>
    </Container>
</template>

<script>
export default {
  name: 'Create',
  data() {
    return {
      selectedDeck: 'Spyfall 1',
    };
  },
  methods: {
    switchDeck(event) {
      this.selectedDeck = event.target.innerText;
    },
    getClass(item) {
      return {
        button: true,
        'is-success': this.selectedDeck === item,
        'is-selected': this.selectedDeck === item,
      };
    },
  },
};
</script>

<style lang="scss">
</style>
