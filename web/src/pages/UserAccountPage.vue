<script setup lang="ts">
import { onMounted, ref } from "vue";
import { User } from "../generated/user";
import { ConvertPhoneNumberToHumanReadable } from "../composables/ConvertPhoneNumberToHumanReadable";
import { ConvertTimestampToHumanReadable } from "../composables/ConvertTimestampToHumanReadable";
import UserApi from "../api/user.api";
import { useAuth } from "../state/useAuth";
import ErrorMessage from "../components/ErrorMessage.vue";

const auth = useAuth();
const userApi = new UserApi();
const user = ref<User | null>(null);
const errorMessage = ref<string>("");

onMounted(async () => {
  errorMessage.value = "";

  if (!auth.state.username) {
    errorMessage.value = "Unable to retrieve user information from the state";
    return;
  }

  const response = await userApi.getByUsername(auth.state.username);

  if (typeof response === "string") {
    errorMessage.value = response;
    return;
  }

  if (!response.user) {
    errorMessage.value = "Unable to retrieve user information from the server";
    return;
  }

  user.value = response.user;
});
</script>

<template>
  <div>
    <ErrorMessage v-if="errorMessage" :message="errorMessage" />

    <h1>User account</h1>
    <p>Here is the user account page</p>

    <div v-if="user">
      <p>Username: {{ user.username }}</p>
      <p>Email: {{ user.email }}</p>
      <p>Tel: {{ ConvertPhoneNumberToHumanReadable(user.phoneNumber) }}</p>
      <p>
        Date de naissance :
        {{ ConvertTimestampToHumanReadable(user.dateOfBirth) }}
      </p>
    </div>
  </div>
</template>

<style scoped></style>
