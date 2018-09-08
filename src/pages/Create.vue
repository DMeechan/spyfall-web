<template>
    <Container id="create" title="Create Game">
        <hr></hr>
        <article class="bigger-bottom">
            <FieldLabel>
                What's your player name?
            </FieldLabel>
            <input
                class="input"
                type="text"
                placeholder="Enter your player name"
                v-model="playerName">
        </article>
        <article class="bigger-bottom">
            <FieldLabel>
                Which game deck do you want to use?
            </FieldLabel>
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
        </article>
        <article class="bigger-bottom">
            <FieldLabel>
                How long should each match last (in minutes)?
            </FieldLabel>
            <input
                class="input"
                type="text"
                placeholder="Enter match length"
                v-model="matchLength">
        </article>
        <hr>
        <a class="button is-primary is-large" @click="createGame">
            Create Game
        </a>
    </Container>
</template>

<script>
import Match from '../utils/match';

export default {
  name: 'Create',
  data() {
    return {
      playerName: 'Dan',
      selectedDeck: 'Spyfall 1',
      matchLength: '8',
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
    createGame() {
      const { playerName, selectedDeck, matchLength } = this;
      const match = new Match(selectedDeck, matchLength);
      match.create();
      console.log(`Player ${playerName} has not joined`);
      // TODO: Make player auto join new match
    },
  },
};
</script>

<style lang="scss">
.bigger-bottom {
    margin-bottom: 3.5rem;
}
</style>
