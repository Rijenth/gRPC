import { createRouter, createWebHistory } from "vue-router";

export const routes = [
  {
    path: "/",
    name: "Accueil",
    addToNavbar: true,
    component: () => import("../pages/HomePage.vue"),
  },
  {
    path: "/users-list",
    name: "Mes utilisateurs",
    addToNavbar: true,
    component: () => import("../pages/UsersList.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    addToNavbar: false,
    component: () => import("../pages/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
