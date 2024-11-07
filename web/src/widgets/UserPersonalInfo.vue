<script setup lang="ts">
import { defineProps, onMounted, ref } from "vue";
import { ConvertTimestampToHumanReadable } from "../composables/ConvertTimestampToHumanReadable";
import OnclickButton from "../components/OnclickButton.vue";
import EditableParagraph from "../components/EditableParagraph.vue";
import UserModel from "../models/user.model";
import DatePicker from "../components/DatePicker.vue";
import { Timestamp } from "../generated/google/protobuf/timestamp";
import UserApi from "../api/user.api";
import { useAuth } from "../state/useAuth";
import ErrorMessage from "../components/ErrorMessage.vue";
import router from "../router/router";

const props = defineProps<{
  updateMode?: boolean;
  username?: string;
}>();

const userApi = new UserApi();
const auth = useAuth();

const user = ref<UserModel | null>(null);
const fetchAndFillUserErrorMessage = ref<string>("");
const patchUserErrorMessage = ref<string>("");
const allowUpdate = ref<boolean>(false);
const updateButtonDisabled = ref<boolean>(false);

const patchUser = async () => {
  fetchAndFillUserErrorMessage.value = "";
  patchUserErrorMessage.value = "";

  if (!user.value) {
    patchUserErrorMessage.value =
      "Unable to update user information, no user provided";
    fetchAndFillUser();
    return;
  }

  let currentUsername = auth.state.username;

  const response = await userApi.patch(user.value.updateUserRequestFormat());

  if (typeof response === "string") {
    patchUserErrorMessage.value = response;
    fetchAndFillUser();
    return;
  }

  if (!response.user) {
    patchUserErrorMessage.value =
      "Unable to update user information on the server";
    fetchAndFillUser();
    return;
  }

  user.value = new UserModel(response.user);

  if (currentUsername !== user.value.username) {
    auth.logout();
    router.push({ name: "Accueil" });
    return;
  }
};

const fetchAndFillUser = async () => {
  fetchAndFillUserErrorMessage.value = "";

  let username = props.username ?? auth.state.username;

  if (!username) {
    fetchAndFillUserErrorMessage.value =
      "Unable to retrieve user information, no username provided";
    return;
  }

  const response = await userApi.getByUsername(username);

  if (typeof response === "string") {
    fetchAndFillUserErrorMessage.value = response;
    return;
  }

  if (!response.user) {
    fetchAndFillUserErrorMessage.value =
      "Unable to retrieve user information from the server";
    return;
  }

  user.value = new UserModel(response.user);
};

onMounted(async () => {
  fetchAndFillUser();
});
</script>

<template>
  <div class="user-personal-info">
    <h2>Informations personnelles</h2>
    <ErrorMessage
      v-if="fetchAndFillUserErrorMessage"
      :message="fetchAndFillUserErrorMessage"
    />
    <ErrorMessage
      v-if="patchUserErrorMessage"
      :message="patchUserErrorMessage"
    />

    <EditableParagraph
      v-if="user"
      :params="{
        title: 'Nom d\'utilisateur',
        value: user.username,
        updateable: allowUpdate,
      }"
      :inputRules="['required', { minLength: 5 }, { maxLength: 20 }]"
      :information-bubble="true"
      :information-message="`Pour des raisons de sécurité, toute modification de ce champ entraînera une déconnexion de votre session`"
      @rulesNotMet="updateButtonDisabled = $event"
      @updated="
        (value: string) => {
          if (user) {
            user.username = value;
          }
        }
      "
    />

    <EditableParagraph
      v-if="user"
      :params="{
        title: 'Nom',
        value: user.lastName,
        updateable: allowUpdate,
      }"
      :inputRules="['required', { minLength: 2 }, { maxLength: 20 }]"
      @rulesNotMet="updateButtonDisabled = $event"
      @updated="
        (value: string) => {
          if (user) {
            user.lastName = value;
          }
        }
      "
    />

    <EditableParagraph
      v-if="user"
      :params="{
        title: 'Prénom',
        value: user.firstName,
        updateable: allowUpdate,
      }"
      :inputRules="['required', { minLength: 2 }, { maxLength: 20 }]"
      @rulesNotMet="updateButtonDisabled = $event"
      @updated="
        (value: string) => {
          if (user) {
            user.firstName = value;
          }
        }
      "
    />

    <DatePicker
      v-if="user"
      title="Né(e) le"
      :timestamp="user.dateOfBirth"
      :updateable="allowUpdate"
      @updated="
        (timestamp: Timestamp) => {
          if (user) {
            user.dateOfBirth = timestamp;
          }
        }
      "
    />

    <EditableParagraph
      v-if="user"
      :params="{
        title: 'Adresse mail',
        value: user.email,
        updateable: allowUpdate,
      }"
      :inputType="'email'"
      :inputRules="['required', 'email']"
      @rulesNotMet="updateButtonDisabled = $event"
      @updated="
        (value: string) => {
          if (user) {
            user.email = value;
          }
        }
      "
    />

    <EditableParagraph
      v-if="user"
      :params="{
        title: 'Adresse',
        value: user.address,
        updateable: allowUpdate,
      }"
      :inputRules="['required']"
      @rulesNotMet="updateButtonDisabled = $event"
      @updated="
        (value: string) => {
          if (user) {
            user.address = value;
          }
        }
      "
    />

    <EditableParagraph
      v-if="user"
      :params="{
        title: 'Numéro de téléphone',
        value: user.phoneNumber,
        updateable: allowUpdate,
      }"
      :inputType="'tel'"
      :inputRules="['required', 'phone']"
      @rulesNotMet="updateButtonDisabled = $event"
      @updated="
        (value: string) => {
          if (user) {
            user.phoneNumber = value;
          }
        }
      "
    />

    <EditableParagraph
      v-if="user"
      :params="{
        title: 'Biographie',
        value: user.bio,
        updateable: allowUpdate,
      }"
      :inputRules="['required', { minLength: 10 }, { maxLength: 20 }]"
      @rulesNotMet="updateButtonDisabled = $event"
      @updated="
        (value: string) => {
          if (user) {
            user.bio = value;
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
      :onButtonClick="
        async () => {
          if (allowUpdate) await patchUser();
          allowUpdate = !allowUpdate;
        }
      "
      :text="allowUpdate ? 'Enregistrer' : 'Modifier'"
      :disabled="updateButtonDisabled"
    />

    <OnclickButton
      v-if="allowUpdate"
      :onButtonClick="
        () => {
          fetchAndFillUser();
          allowUpdate = false;
        }
      "
      style="background-color: #f44336; margin-left: 10px"
      text="Annuler"
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
