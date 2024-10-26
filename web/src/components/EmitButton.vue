<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  onButtonClick: () => void;
  text: string;
  backgroundColor?: string;
  hoverColor?: string;
}>();

const handleClick = () => {
  props.onButtonClick();
};
</script>

<template>
  <button
    class="btn"
    @click="handleClick"
    :style="{
      '--bg-color': props.backgroundColor || '#7289da',
      '--hover-color': props.hoverColor || '#5d6eab',
    }"
  >
    <span>{{ props.text }}</span>
  </button>
</template>

<style scoped>
.btn {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  background-color: var(--bg-color);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.1s ease;
}

.btn:hover {
  background-color: var(--hover-color);
}

.btn:active {
  background-color: darken(var(--hover-color), 10%);
  transform: scale(0.98);
}

.btn:focus {
  outline: 2px solid var(--hover-color);
  outline-offset: 2px;
}
</style>
