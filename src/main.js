import { createApp } from "vue";
import App from "./App.vue";
import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";

const toastOptions = {
  position: POSITION.BOTTOM_RIGHT,
};

createApp(App).use(Toast, toastOptions).mount("#app");
