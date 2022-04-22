import { createRouter, createWebHistory } from "vue-router";
import ValidationMain from "@/views/ValidationMain.vue";
import ComponentsPreview from "@/views/ComponentsPreview.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: ValidationMain,
  },
  {
    path: "/ui",
    name: "UI Testing",
    component: ComponentsPreview,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
