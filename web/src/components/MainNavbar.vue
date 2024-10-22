<script setup lang="ts">
import { ref } from "vue";

interface Option {
  label: "INDEX" | "GET" | "POST" | "PATCH" | "DELETE";
  value: "index" | "get" | "post" | "patch" | "delete";
}

const options: Option[] = [
  { label: "INDEX", value: "index" },
  { label: "GET", value: "get" },
  { label: "POST", value: "post" },
  { label: "PATCH", value: "patch" },
  { label: "DELETE", value: "delete" },
];

const selectedOption = ref<string>("");

const emit = defineEmits(["update:selectedOption"]);

const selectOption = (options: string) => {
  selectedOption.value = options;
  emit("update:selectedOption", selectedOption.value);
};
</script>

<template>
  <nav class="menu">
    <button
      v-for="option in options"
      :key="option.value"
      @click="selectOption(option.value)"
      :class="{ active: selectedOption === option.value }"
    >
      {{ option.label }}
    </button>
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
