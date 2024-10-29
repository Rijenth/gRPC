// src/pages/LogoutPage.vue
<script setup lang="ts">
import { useAuth } from "../state/useAuth";
import { useRouter } from "vue-router";
import { onMounted } from "vue";

const auth = useAuth();
const router = useRouter();

onMounted(() => {
  auth.logout();
  router.push({ name: "Accueil" });
});
</script>

<template>
  <p>Déconnexion en cours...</p>
</template>
