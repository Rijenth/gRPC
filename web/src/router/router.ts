import { createRouter, createWebHistory } from "vue-router";

export const routes = [
  {
    path: "/",
    name: "Accueil",
    component: () => import("../pages/HomePage.vue"),
    meta: {
      addToNavbar: true,
      requiresAuth: false,
    },
  },
  {
    path: "/users-list",
    name: "Mes utilisateurs",
    component: () => import("../pages/UsersList.vue"),
    meta: {
      addToNavbar: true,
      requiresAuth: false,
    },
  },
  {
    path: "/logout",
    name: "Déconnexion",
    component: () => import("../pages/LogoutPage.vue"),
    meta: {
      addToNavbar: true,
      requiresAuth: true,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../pages/NotFound.vue"),
    meta: {
      addToNavbar: false,
      requiresAuth: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
