import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Homepage",
    component: () => import("../pages/HomePage.vue"),
  },
  {
    path: "/users-list",
    name: "UsersList",
    component: () => import("../pages/UsersList.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../pages/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
