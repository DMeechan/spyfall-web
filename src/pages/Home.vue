<template>
    <Container id="home" title="Welcome to Spyfall">
        <router-link
            tag="a" to="/create"
            class="button is-large is-primary is-outlined">
            Create game
        </router-link>
        <br/>
        <br/>
        <router-link
            tag="a" to="/join"
            class="button is-large is-primary">
            Join game
        </router-link>
    </Container>
</template>

<script>
export default {
  name: 'Home',
};
</script>
