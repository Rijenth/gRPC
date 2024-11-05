<script setup lang="ts">
import { defineProps, ref, watch } from "vue";
import ErrorMessage from "./ErrorMessage.vue";
import useInputValidate from "../composables/inputValidate";
import { InputRules } from "../types/input_rules.type";

const props = defineProps<{
  params: {
    title: string;
    value: string;
    updateable?: boolean;
  };
  inputType?: string;
  inputRules?: InputRules[];
}>();
const errorMessage = ref<string>("");
const localValue = ref(props.params.value);

watch(
  () => props.params.value,
  (newValue) => {
    localValue.value = newValue;
  },
);

const emit = defineEmits(["updated", "rulesNotMet"]);

watch(
  () => localValue.value,
  (newValue) => {
    validate();
    emit("updated", newValue);
  },
);

const validate = () => {
  errorMessage.value = "";

  if (!props.inputRules) {
    return;
  }

  const message = useInputValidate(localValue.value, props.inputRules);

  if (!message) {
    emit("rulesNotMet", false);
    return;
  }

  emit("rulesNotMet", true);

  errorMessage.value = message;
};
</script>

<template>
  <div>
    <strong>{{ params.title }} :</strong>
    <p v-if="!params.updateable">{{ localValue }}</p>

    <input v-else :type="inputType || 'text'" v-model="localValue" />

    <ErrorMessage v-if="errorMessage" :message="errorMessage" />
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
