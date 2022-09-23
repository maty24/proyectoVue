import { createRouter, createWebHashHistory } from "vue-router";
import daybookRouter from "../moules/daybook/router";
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/daybook",
    ...daybookRouter, //le traigo todo , me pone exactamante lo tengo si es codigo js me lo pone completo
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
