import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Game",
    component: () => import("./views/Game.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
