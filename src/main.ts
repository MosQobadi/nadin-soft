import { createApp, reactive } from 'vue';
import App from './App.vue';
import router from './router';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import { createI18n } from 'vue-i18n'; 

const globalState = reactive({
  selectedTheme: localStorage.getItem("selectedTheme") || "light",
});

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages: {
    en: require('./locales/en.json'),
    fa: require('./locales/fa.json'),
  },
});

createApp(App)
  .use(Antd)
  .use(router)
  .use(i18n)
  .mount('#app');
