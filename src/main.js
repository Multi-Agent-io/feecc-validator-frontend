import { createApp } from "vue";
import App from "./App.vue";
import Toast, { POSITION } from "vue-toastification";
import router from "./router";
import dayjs from "dayjs";

import "vue-toastification/dist/index.css";
import "dayjs/locale/ru";
import customParseFormat from "dayjs/plugin/customParseFormat";

const toastOptions = {
  position: POSITION.BOTTOM_RIGHT,
};

const app = createApp(App);

app.config.globalProperties.$dayjs = dayjs;
app.config.globalProperties.$dayjs.locale("ru");
app.config.globalProperties.$dayjs.extend(customParseFormat)

app.use(router);
app.use(Toast, toastOptions);

app.mount("#app");
