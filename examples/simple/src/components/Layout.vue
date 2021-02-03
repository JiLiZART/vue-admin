<script>
export default {
  name: 'Layout',
  props: {},
  components: {}
}
</script>

<template>
  <section class="layout">
    <slot></slot>
  </section>
</template>

<style lang="css" scoped>
.layout {
  background: #ccc;
}
</style>
