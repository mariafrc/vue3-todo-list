import { createApp } from "vue";
import { Quasar, Dialog } from 'quasar';

// Import icon libraries
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/dist/quasar.css'

import App from "./App.vue";
import store from "./store/index";

const app = createApp(App);
app.use(Quasar, {
  plugins: { Dialog }, // import Quasar plugins and add here
})
app.use(store);
app.mount("#app");
