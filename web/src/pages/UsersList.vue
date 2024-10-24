<script setup lang="ts">
import { onMounted, ref } from "vue";
import { User } from "../generated/user";
import { UserServiceClient } from "../generated/user.client";
import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";
import { ResponsiveTableType } from "../types/responsive_table.type";
import ErrorMessage from "../components/ErrorMessage.vue";
import ResponsiveTable from "../components/ResponsiveTable.vue";
import BasicModal from "../components/BasicModal.vue";

const data = ref<ResponsiveTableType>({
  bold: true,
  matrix: [
    [
      { label: "username", value: "Nom d'utilisateur" },
      { label: "email_address", value: "Adresse mail" },
      { label: "first_name", value: "Prénom" },
      { label: "last_name", value: "Nom" },
      { label: "bio", value: "Biographie" },
    ],
  ],
});
const errorMessage = ref<string | null>(null);
const users = ref<User[]>([]);
const showModal = ref(false);
const selectedUser = ref<User | null>(null);

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
        users.value.push(user);
      });

      users.value.forEach((user: User) => {
        data.value.matrix.push([
          { label: "username", value: user.username },
          { label: "email_address", value: user.email },
          { label: "first_name", value: user.firstName },
          { label: "last_name", value: user.lastName },
          { label: "bio", value: user.bio },
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

const handleResponsiveTableRowClick = (row: Record<string, string>) => {
  if (!row.username || !row.email_address) {
    return;
  }

  const user = users.value.find(
    (user) =>
      user.username === row.username && user.email === row.email_address,
  );

  if (!user) {
    return;
  }

  selectedUser.value = user;
  showModal.value = true;
};

onMounted(() => {
  fetchAllUsers();
});
</script>

<template>
  <div class="container">
    <ErrorMessage v-if="errorMessage" :message="errorMessage" />

    <ResponsiveTable
      :table="data"
      @responsive-table:row-click="handleResponsiveTableRowClick"
    />

    <BasicModal :show="showModal" @basic-modal:close="showModal = false">
      <h3>Informations Utilisateur</h3>
      <p><strong>Nom d'utilisateur : </strong>{{ selectedUser?.username }}</p>
      <p><strong>Email : </strong>{{ selectedUser?.email }}</p>
    </BasicModal>
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
