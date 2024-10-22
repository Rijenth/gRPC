<script setup lang="ts">
import { onMounted, ref } from "vue";
import { User } from "../generated/user";
import { UserServiceClient } from "../generated/user.client";
import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";
import ErrorMessage from "./error_message.vue";
import ResponsiveTable from "./responsive_table.vue";
import { ResponsiveTableType } from "../types/responsive_table.type";

const data = ref<ResponsiveTableType>({
  bold: true,
  matrix: [
    [
      { value: "Nom d'utilisateur" },
      { value: "Adresse mail" },
      { value: "Prénom" },
      { value: "Nom" },
      { value: "Biographie" },
    ],
  ],
});
const errorMessage = ref<string | null>(null);

const transport = new GrpcWebFetchTransport({
  baseUrl: "http://localhost:8000",
});
const userService = new UserServiceClient(transport);

const fetchAllUsers = async () => {
  try {
    errorMessage.value = null;

    const request = await userService.index({});

    if (request.response && request.response.users) {
      request.response.users.forEach((user: User) => {
        data.value.matrix.push([
          { value: user.username },
          { value: user.email },
          { value: user.firstName },
          { value: user.lastName },
          { value: user.bio },
        ]);
      });

      return;
    }

    errorMessage.value = "Aucun utilisateur trouvé";
  } catch (error) {
    if (error instanceof Error) {
      errorMessage.value = error.message;
      return;
    }

    console.error(error);
    errorMessage.value =
      "Une erreur inconnue s'est produite, (voir la console pour plus de détails)";
  }
};

onMounted(() => {
  fetchAllUsers();
});
</script>

<template>
  <div class="container">
    <ErrorMessage v-if="errorMessage" :message="errorMessage" />

    <ResponsiveTable :table="data" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  padding-top: 20px;
}

.user-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

.user-table th,
.user-table td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.user-table th {
  background-color: #f4f4f4;
  font-weight: bold;
}

.user-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.user-table tr:hover {
  background-color: #f1f1f1;
  cursor: pointer;
}

@media (max-width: 600px) {
  .user-table {
    display: block;
    width: 100%;
    overflow-x: auto;
    white-space: nowrap;
  }

  .user-table th,
  .user-table td {
    padding: 10px;
    font-size: 14px;
  }
}
</style>
