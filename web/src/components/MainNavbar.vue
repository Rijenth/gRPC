<script setup lang="ts"></script>

<template>
  <nav class="menu">
    <router-link to="/" class="button" :class="{ active: $route.path === '/' }">
      Accueil
    </router-link>

    <router-link
      to="/users-list"
      class="button"
      :class="{ active: $route.path === '/users-list' }"
    >
      Mes utilisateurs
    </router-link>
  </nav>
</template>

<style scoped>
.menu {
  display: flex;
  justify-content: center;
  padding: 15px;
  background-color: #f8f8f8;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  color: #333;
  gap: 15px;
}

.button {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  color: #333;
  cursor: pointer;
  padding: 8px 16px;
  transition: all 0.3s ease;
  text-decoration: none;
}

.button:hover {
  background-color: #f0f0f0;
  border-color: #ccc;
}

.button.active {
  background-color: #7289da;
  color: #fff;
  border-color: #5865f2;
  font-weight: bold;
}

@media (max-width: 600px) {
  .menu {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }

  .button {
    flex: 1 1 45%;
    margin: 5px;
    text-align: center;
  }
}
</style>
