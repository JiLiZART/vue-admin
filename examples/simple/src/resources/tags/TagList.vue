<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent(function TagList() {
  const count = ref(0)
  return { count }
})
</script>

<template>
  <span>{{ props.test }}</span>
  <span>TagList</span>
</template>

<style lang="" scoped>
</style>
