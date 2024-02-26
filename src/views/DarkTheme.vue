<template>
  <div class="theming">
    <button @click="toggleDark()">
      {{ isDark ? $t('theme.dark') : $t('theme.light') }}
    </button>
    <div>
      <button
        :class="locale === 'en' && 'font-bold'"
        @click="setLanguage('en')"
      >
        EN
      </button>
      /
      <button
        :class="locale === 'ru' && 'font-bold'"
        @click="setLanguage('ru')"
      >
        RU
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';
import { useI18n } from 'vue-i18n';
import { useBroadcastChannel } from '@vueuse/core';
import { watch } from 'vue';

const { data, post } = useBroadcastChannel({
  name: 'language',
});

const { locale } = useI18n();
const isDark = useDark();
const toggleDark = useToggle(isDark);

function setLanguage(lang: 'en' | 'ru') {
  locale.value = lang;
  localStorage.setItem('lang', lang);
  post(lang);
  document.documentElement.lang = lang;
}

watch(data, () => {
  if (data.value) {
    locale.value = String(data.value);
  }
});
</script>

<style scoped>
.theming {
  @apply p-10;
}
</style>

<style>
body {
  @apply bg-slate-200 dark:bg-slate-800;
  @apply text-black dark:text-white;
}
</style>
