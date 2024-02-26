<template>
  <button class="button">Record</button>
</template>

<script setup lang="ts">
const props = defineProps<{
  video?: HTMLVideoElement;
}>();
</script>

<style>
.button {
  @apply bg-red-500;
}
</style>
