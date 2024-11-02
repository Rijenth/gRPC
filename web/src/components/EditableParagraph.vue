<script setup lang="ts">
import { defineProps, ref, watch } from "vue";

const props = defineProps<{
  title: string;
  value: string;
  updateMode?: boolean;
}>();

const localValue = ref(props.value);

watch(
  () => props.value,
  (newValue) => {
    localValue.value = newValue;
  },
);

const emit = defineEmits(["updated"]);
</script>

<template>
  <div>
    <strong>{{ title }} :</strong>
    <p v-if="!updateMode">{{ localValue }}</p>

    <input
      v-else
      type="text"
      :onchange="() => emit('updated', localValue)"
      v-model="localValue"
    />
  </div>
</template>

<style scoped>
input {
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
