<template>
    <h4 class="subtitle is-4 less-bottom">
        <slot>

        </slot>
    </h4>
</template>

<script>
export default {
    name: 'field-label',
};
</script>

<style scoped>
.less-bottom {
    margin-bottom: 0.5rem;
}
</style>
