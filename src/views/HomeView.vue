<template>
  <div>
    <form @submit.prevent="onSubmit">
      <input type="text" class="v-input" v-tooltip="`Tooltip text`" />
      <div v-tooltip:red="`Tooltip Text Red`">Some Text</div>
      <div v-tooltip.small="`Tooltip Text small`">Some Text 2</div>
    </form>
  </div>
</template>

<script setup lang="ts">
  function onSubmit() {
    console.log('test');
  }
</script>

<style scoped>
  .v-input {
    @apply border border-black m-3;
  }
</style>
