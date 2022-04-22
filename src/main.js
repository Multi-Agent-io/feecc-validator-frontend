import { createApp } from "vue";
import App from "./App.vue";
import Toast, { POSITION } from "vue-toastification";
import router from "./router";

import "vue-toastification/dist/index.css";

const toastOptions = {
  position: POSITION.BOTTOM_RIGHT,
};

const app = createApp(App);

app.use(router);
app.use(Toast, toastOptions);

app.mount("#app");
