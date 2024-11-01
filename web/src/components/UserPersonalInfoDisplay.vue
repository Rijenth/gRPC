<script setup lang="ts">
import { defineProps } from "vue";
import { User } from "../generated/user";
import { ConvertPhoneNumberToHumanReadable } from "../composables/ConvertPhoneNumberToHumanReadable";
import { ConvertTimestampToHumanReadable } from "../composables/ConvertTimestampToHumanReadable";

defineProps<{
  user: User | null;
}>();
</script>

<template>
  <div class="user-personal-info">
    <h2>Informations personnelles</h2>
    <p><strong>Nom d'utilisateur : </strong>{{ user?.username }}</p>
    <p><strong>Adresse mail : </strong>{{ user?.email }}</p>
    <p>
      <strong>Numéro de téléphone : </strong>
      {{ ConvertPhoneNumberToHumanReadable(user?.phoneNumber) }}
    </p>
    <p>
      <strong>Date de création : </strong>
      {{ ConvertTimestampToHumanReadable(user?.createdAt) }}
    </p>
    <p>
      <strong>Date de naissance : </strong>
      {{ ConvertTimestampToHumanReadable(user?.dateOfBirth) }}
    </p>
    <p><strong>Biographie : </strong>{{ user?.bio }}</p>
  </div>
</template>

<style>
.user-personal-info {
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.user-personal-info h2 {
  font-size: 1.5em;
  margin-bottom: 15px;
}

.user-personal-info p {
  margin: 10px 0;
  line-height: 1.6;
}

@media screen and (min-width: 768px) {
  .user-personal-info {
    width: 100%;
    padding: 20px;
  }
}
</style>
