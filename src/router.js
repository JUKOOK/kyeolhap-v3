import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    redirect: { name: "tutorial" },
  },
  {
    path: "/tutorial",
    name: "tutorial",
    component: () => import("./views/Tutorial.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
