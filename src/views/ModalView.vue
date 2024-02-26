<template>
  <div class="modals-page">
    {{ dialog?.open }}
    <button @click="showDialog">Show Dialog!</button>
  </div>

  <teleport to="body">
    <dialog ref="dialog">Hello World!!</dialog>
  </teleport>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const dialog = ref<HTMLDialogElement | null>(null);

  function showDialog() {
    if (!dialog?.value) return;
    dialog.value.show();
    console.log(dialog.value.open);
  }
</script>

<style scoped>
  .modals-page {
    @apply m-4 max-w-[1024px] mx-auto;
  }
</style>
