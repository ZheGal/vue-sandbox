<template>
  <div class="container mx-auto px-4 py-8">
    <button
      @click="toggleShowSource()"
      class="text-white p-2 px-4 cursor-pointer rounded-md bg-slate-800 font-bold"
    >
      {{ `Show ${showSource ? 'Preview' : 'Source'}` }}
    </button>
    <hr class="pb-2 my-4" />
    <div
      v-html="showSource ? markdownSource : compiledMarkdown"
      class="border p-4 shadow-lg flex flex-col gap-3 bg-black/5"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { useToggle } from '@vueuse/core';
import { marked } from 'marked';
import axios from 'axios';
import { computed, onBeforeMount, ref } from 'vue';

const [showSource, toggleShowSource] = useToggle();
const markdownSource = ref<string>('');
const compiledMarkdown = computed(() => marked.parse(markdownSource.value));

onBeforeMount(() => {
  axios
    .get('/static/text/Testing.md')
    .then(({ data }) => (markdownSource.value = data));
});
</script>

<style>
pre {
  @apply bg-green-950 text-green-300 px-3 py-1;
}
</style>
