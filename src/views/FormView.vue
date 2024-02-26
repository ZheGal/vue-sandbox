<template>
  <div class="form-page">
    <form @submit.prevent="onSubmit" class="form">
      <div class="form-col">
        <input v-form-input="`name`" />
      </div>
      <div class="form-col">
        <input v-form-input="`surname`" />
      </div>
      <div class="form-col">
        <input v-form-input="`password`" />
      </div>
      <div class="form-col">
        <button>Submit</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
  function onSubmit() {
    console.log('test');
  }
</script>

<style scoped>
  .form {
    @apply flex flex-col gap-4;
  }
  .form-page {
    @apply m-4 max-w-[1024px] mx-auto;
  }
  .form-col {
    @apply w-full flex;
  }
  .form-col input {
    @apply w-full border-2 border-black;
  }
</style>
