import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import { tooltip } from './directives/tooltip';
import { formInput } from './directives/form-input';
import { createI18n, useI18n } from 'vue-i18n';
import { languages as messages, defaultLocale } from './i18n';

const locale = localStorage.getItem('lang') ?? defaultLocale;

const i18n = createI18n({
  legacy: false,
  fallbackLocale: 'en',
  locale,
  messages,
});

const app = createApp(App, {
  setup() {
    const { t } = useI18n();
    return { t };
  },
});

app.directive('tooltip', tooltip);
app.directive('form-input', formInput);

app.use(i18n);
app.use(createPinia());
app.use(router);

app.mount('#app');

document.documentElement.lang = locale;
