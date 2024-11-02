<script setup lang="ts">
import { defineProps, ref, watch } from "vue";
import { User } from "../generated/user";
import { ConvertTimestampToHumanReadable } from "../composables/ConvertTimestampToHumanReadable";
import OnclickButton from "../components/OnclickButton.vue";
import EditableParagraph from "../components/EditableParagraph.vue";
import UserModel from "../models/user.model";

const props = defineProps<{
  user: User | null;
  updateMode?: boolean;
}>();

const allowUpdate = ref<boolean>(false);
const localUser = ref<UserModel | null>(null);

watch(
  () => props.user,
  (newValue) => {
    if (!newValue) {
      return;
    }

    localUser.value = new UserModel(newValue);
  },
  { immediate: true },
);
</script>

<template>
  <div class="user-personal-info">
    <h2>Informations personnelles</h2>

    <EditableParagraph
      v-if="localUser"
      title="Nom d'utilisateur"
      :value="localUser.username"
      :updateMode="allowUpdate"
      @updated="
        (value) => {
          if (localUser) {
            localUser.username = value;
          }
        }
      "
    />

    <EditableParagraph
      v-if="localUser"
      title="Nom"
      :value="localUser.lastName"
      :updateMode="allowUpdate"
      @updated="
        (value) => {
          if (localUser) {
            localUser.lastName = value;
          }
        }
      "
    />

    <EditableParagraph
      v-if="localUser"
      title="Prénom"
      :value="localUser.firstName"
      :updateMode="allowUpdate"
      @updated="
        (value) => {
          if (localUser) {
            localUser.firstName = value;
          }
        }
      "
    />

    <EditableParagraph
      v-if="localUser"
      title="Adresse mail"
      :value="localUser.email"
      :updateMode="allowUpdate"
      @updated="
        (value) => {
          if (localUser) {
            localUser.email = value;
          }
        }
      "
    />

    <EditableParagraph
      v-if="localUser"
      title="Né(e) le"
      :value="localUser.getDateOfBirth()"
      :updateMode="allowUpdate"
      @updated="
        (value) => {
          if (localUser) {
            localUser.dateOfBirth = value;
          }
        }
      "
    />

    <EditableParagraph
      v-if="localUser"
      title="Numéro de téléphone"
      :value="localUser.getPhoneNumber()"
      :updateMode="allowUpdate"
      @updated="
        (value) => {
          if (localUser) {
            localUser.phoneNumber = value;
          }
        }
      "
    />

    <EditableParagraph
      v-if="localUser"
      title="Biographie"
      :value="localUser.bio"
      :updateMode="allowUpdate"
      @updated="
        (value) => {
          if (localUser) {
            localUser.bio = value;
          }
        }
      "
    />

    <p>
      <strong>Inscrit depuis le </strong>
      {{ ConvertTimestampToHumanReadable(user?.createdAt) }}
    </p>

    <OnclickButton
      v-if="updateMode"
      :onButtonClick="() => (allowUpdate = !allowUpdate)"
      :text="allowUpdate ? 'Enregistrer' : 'Modifier'"
    />
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
