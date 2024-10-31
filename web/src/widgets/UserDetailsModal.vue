<script setup lang="ts">
import { ref } from "vue";
import BasicModal from "../components/BasicModal.vue";
import UserApi from "../api/user.api";
import { User } from "../generated/user";
import { ConvertPhoneNumberToHumanReadable } from "../composables/ConvertPhoneNumberToHumanReadable";
import { ConvertTimestampToHumanReadable } from "../composables/ConvertTimestampToHumanReadable";
import EmitButton from "../components/EmitButton.vue";

const props = defineProps<{
  selectedUser: User | null;
  showModal: boolean;
}>();

const emit = defineEmits(["selected-user:deleted", "show-modal:update"]);

const userApi = new UserApi();
const errorMessage = ref<string | null>(null);

const handleDeleteUserFromList = async () => {
  errorMessage.value = null;

  if (!props.selectedUser) {
    return;
  }

  const response = await userApi.delete(props.selectedUser.id);

  if (typeof response === "string") {
    errorMessage.value = response;
    return;
  }

  if (response?.success) {
    emit("selected-user:deleted", props.selectedUser);
    return;
  }

  errorMessage.value =
    "Une erreur est survenue lors de la suppression de l'utilisateur";
};
</script>

<template>
  <BasicModal
    :show="props.showModal"
    @basic-modal:close="emit('show-modal:update', false)"
  >
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
              emit('show-modal:update', false);
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
</template>

<style scoped>
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

@media (max-width: 600px) {
  .separator {
    margin: 0;
  }
}
</style>
