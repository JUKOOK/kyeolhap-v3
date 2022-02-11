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
  {
    path: "/solo",
    name: "soloGame",
    component: () => import("./views/SoloGame.vue"),
  },
  {
    path: "/1v1",
    name: "battleGame",
    component: () => import("./views/BattleGame.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
