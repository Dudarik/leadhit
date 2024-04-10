import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import PrimeVue from "primevue/config";
import { locale } from "./config";

import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/aura-light-lime/theme.css";
import "primeicons/primeicons.css";

const app = createApp(App);

app.use(PrimeVue, {
  locale,
});
app.use(store);
app.use(router);
app.mount("#app");
