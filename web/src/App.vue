<script setup lang="ts">
import { ref } from 'vue';
import IndexUser from './components/indexUser.vue';

interface Option {
  label: 'INDEX' | 'GET' | 'POST' | 'PATCH' | 'DELETE';
  value: 'index' | 'get' | 'post' | 'patch' | 'delete';
}

const options: Option[] = [
  { label: 'INDEX', value: 'index' },
  { label: 'GET', value: 'get' },
  { label: 'POST', value: 'post' },
  { label: 'PATCH', value: 'patch' },
  { label: 'DELETE', value: 'delete' },
];

const selectedOption = ref<string>('');

const getComponent = (option: string) => {
  switch (option) {
    case 'index':
    case 'get':
    case 'post':
    case 'patch':
    case 'delete':
      return IndexUser;
    default:
      return null;
  }
};
</script>

<template>
  <div class="container">
    <nav class="menu">
      <button 
        v-for="option in options" 
        :key="option.value" 
        @click="selectedOption = option.value"
        :class="{ active: selectedOption === option.value }">
        {{ option.label }}
      </button>
    </nav>

    <div class="main-body">
      <p v-if="!selectedOption" class="info-message">
        Sélectionnez une option pour faire apparaître le composant adéquat
      </p>

      <component :is="getComponent(selectedOption)" v-else />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.menu {
  display: flex;
  justify-content: center;
  padding: 15px;
  background-color: #f8f8f8;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  color: #333;
  gap: 15px;
}

button {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  color: #333;
  cursor: pointer;
  padding: 8px 16px;
  transition: all 0.3s ease;
}

button:hover {
  background-color: #f0f0f0;
  border-color: #ccc;
}

button.active {
  background-color: #7289da;
  color: #fff;
  border-color: #5865f2;
  font-weight: bold;
}

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

@media (max-width: 600px) {
  .menu {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }

  button {
    flex: 1 1 45%;
    margin: 5px;
    text-align: center;
  }
}
</style>
