<script setup lang="ts">
import { onMounted, ref } from "vue";
import { User } from "../generated/user";
import { ResponsiveTableType } from "../types/responsive_table.type";
import ErrorMessage from "../components/ErrorMessage.vue";
import ResponsiveTable from "../components/ResponsiveTable.vue";
import BasicModal from "../components/BasicModal.vue";
import { ConvertTimestampToHumanReadable } from "../composables/ConvertTimestampToHumanReadable";
import { ConvertPhoneNumberToHumanReadable } from "../composables/ConvertPhoneNumberToHumanReadable";
import EmitButton from "../components/EmitButton.vue";
import UserApi from "../api/user.api";

const userApi = new UserApi();
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

const fetchAllUsers = async () => {
  errorMessage.value = null;

  const response = await userApi.index();

  if (typeof response === "string") {
    errorMessage.value = response;
    return;
  }

  if (response?.users) {
    response?.users.forEach((user: User) => {
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

  errorMessage.value = "Impossible de récupérer la liste des utilisateurs";
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

const handleDeleteUserFromList = async () => {
  errorMessage.value = null;

  if (!selectedUser.value) {
    return;
  }

  const response = await userApi.delete(selectedUser.value.id);

  if (typeof response === "string") {
    errorMessage.value = response;
    return;
  }

  if (response?.success) {
    users.value = users.value.filter(
      (user) => user.id !== selectedUser.value?.id,
    );

    data.value.matrix = data.value.matrix.filter(
      (row) => row[0].value !== selectedUser.value?.username,
    );

    selectedUser.value = null;
    showModal.value = false;

    return;
  }

  errorMessage.value =
    "Une erreur est survenue lors de la suppression de l'utilisateur";
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
      <div class="modal-children">
        <h2 class="title">
          Fiche de
          {{
            selectedUser?.lastName.toUpperCase() + " " + selectedUser?.firstName
          }}
        </h2>
        <hr class="separator" />
        <p><strong>Nom d'utilisateur : </strong>{{ selectedUser?.username }}</p>
        <p><strong>Adresse mail : </strong>{{ selectedUser?.email }}</p>
        <p>
          <strong>Numéro de téléphone : </strong
          >{{ ConvertPhoneNumberToHumanReadable(selectedUser?.phoneNumber) }}
        </p>
        <p>
          <strong>Date de naissance : </strong
          >{{ ConvertTimestampToHumanReadable(selectedUser?.dateOfBirth) }}
        </p>
        <p><strong>Biographie : </strong>{{ selectedUser?.bio }}</p>

        <div class="modal-actions">
          <EmitButton
            text="Fermer"
            :onButtonClick="
              () => {
                showModal = false;
              }
            "
          />

          <EmitButton
            text="Retirer de votre liste"
            :onButtonClick="handleDeleteUserFromList"
            backgroundColor="#d93939"
            hoverColor="#b72f2f"
          />
        </div>
      </div>
    </BasicModal>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  padding-top: 20px;
}
.title {
  text-align: center;
  border: 1px solid #333;
  border-radius: 5px;
  padding: 10px;
}

.separator {
  margin: 40px 0;
}

.modal-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
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
  .separator {
    margin: 0;
  }

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
