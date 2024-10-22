<script setup lang="ts">
import { ref } from "vue";
import IndexUser from "./components/indexUser.vue";
import MainLayout from "./layouts/main_layout.vue";
import MainNavbar from "./components/MainNavbar.vue";

const selectedOption = ref<string>("");

const getComponent = (option: string) => {
  switch (option) {
    case "index":
    case "get":
    case "post":
    case "patch":
    case "delete":
      return IndexUser;
    default:
      return null;
  }
};

const handleSelectedOption = (option: string) => {
  selectedOption.value = option;
};
</script>

<template>
  <MainLayout>
    <MainNavbar @update:selected-option="handleSelectedOption" />

    <div class="main-body">
      <p v-if="!selectedOption" class="info-message">
        Sélectionnez une option pour faire apparaître le composant adéquat
      </p>

      <component :is="getComponent(selectedOption)" v-else />
    </div>
  </MainLayout>
</template>

<style scoped>
.main-body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  padding: 20px;
}

.main-body p {
  margin: 0;
  font-size: 18px;
  text-align: center;
}

.info-message {
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  color: #666;
  font-size: 16px;
  text-align: center;
  max-width: 80%;
  margin: 0 auto;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
}
</style>
