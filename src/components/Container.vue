<template>
    <section :id="id" class="section has-text-centered">
        <div class="container has-background-white">
            <h1 class="title">
                {{ title }}
            </h1>
            <slot>

            </slot>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Container',
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: false,
      default: '',
    },
  },
};
</script>

<style lang="scss">

</style>
