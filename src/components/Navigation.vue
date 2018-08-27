<template>
    <nav id="nav" class="navbar is-light is-transparent">
        <!-- is-fixed-top -->
        <div class="container">
            <div class="navbar-brand">
                <router-link
                    class="navbar-item"
                    to="/">
                    Spyfall
                </router-link>
            </div>
            <div id="navbarMenu" class="navbar-menu">
                <div class="navbar-end">
                    <router-link
                        class="navbar-item is-active"
                        to="/">
                        Home
                    </router-link>
                    <router-link
                        class="navbar-item"
                        to="/about">
                        About
                    </router-link>
                    <router-link
                        class="navbar-item"
                        to="/language">
                        Language
                    </router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'Navigation',
};
</script>

<style lang="scss">
</style>
