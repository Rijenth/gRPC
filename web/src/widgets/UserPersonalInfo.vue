<script setup lang="ts">
import { defineProps, ref, watch } from "vue";
import { User } from "../generated/user";
import { ConvertTimestampToHumanReadable } from "../composables/ConvertTimestampToHumanReadable";
import OnclickButton from "../components/OnclickButton.vue";
import EditableParagraph from "../components/EditableParagraph.vue";
import UserModel from "../models/user.model";
import DatePicker from "../components/DatePicker.vue";
import { Timestamp } from "../generated/google/protobuf/timestamp";

const props = defineProps<{
  user: User | null;
  updateMode?: boolean;
}>();

const allowUpdate = ref<boolean>(false);
const updateButtonDisabled = ref<boolean>(false);
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
      :params="{
        title: 'Nom d\'utilisateur',
        value: localUser.username,
        updateable: allowUpdate,
      }"
      :inputRules="['required']"
      @rulesNotMet="updateButtonDisabled = $event"
      @updated="
        (value: string) => {
          if (localUser) {
            localUser.username = value;
          }
        }
      "
    />

    <EditableParagraph
      v-if="localUser"
      :params="{
        title: 'Nom',
        value: localUser.lastName,
        updateable: allowUpdate,
      }"
      :inputRules="['required', { minLength: 2 }, { maxLength: 20 }]"
      @rulesNotMet="updateButtonDisabled = $event"
      @updated="
        (value: string) => {
          if (localUser) {
            localUser.lastName = value;
          }
        }
      "
    />

    <EditableParagraph
      v-if="localUser"
      :params="{
        title: 'Prénom',
        value: localUser.firstName,
        updateable: allowUpdate,
      }"
      :inputRules="['required']"
      @rulesNotMet="updateButtonDisabled = $event"
      @updated="
        (value: string) => {
          if (localUser) {
            localUser.firstName = value;
          }
        }
      "
    />

    <DatePicker
      v-if="localUser"
      title="Né(e) le"
      :timestamp="localUser.dateOfBirth"
      :updateable="allowUpdate"
      @updated="
        (timestamp: Timestamp) => {
          if (localUser) {
            localUser.dateOfBirth = timestamp;
          }
        }
      "
    />

    <EditableParagraph
      v-if="localUser"
      :params="{
        title: 'Adresse mail',
        value: localUser.email,
        updateable: allowUpdate,
      }"
      :inputType="'email'"
      :inputRules="['required', 'email']"
      @rulesNotMet="updateButtonDisabled = $event"
      @updated="
        (value: string) => {
          if (localUser) {
            localUser.email = value;
          }
        }
      "
    />

    <EditableParagraph
      v-if="localUser"
      :params="{
        title: 'Adresse',
        value: localUser.address,
        updateable: allowUpdate,
      }"
      :inputRules="['required']"
      @rulesNotMet="updateButtonDisabled = $event"
      @updated="
        (value: string) => {
          if (localUser) {
            localUser.address = value;
          }
        }
      "
    />

    <EditableParagraph
      v-if="localUser"
      :params="{
        title: 'Numéro de téléphone',
        value: localUser.phoneNumber,
        updateable: allowUpdate,
      }"
      :inputType="'tel'"
      :inputRules="['required', 'phone']"
      @rulesNotMet="updateButtonDisabled = $event"
      @updated="
        (value: string) => {
          if (localUser) {
            localUser.phoneNumber = value;
          }
        }
      "
    />

    <EditableParagraph
      v-if="localUser"
      :params="{
        title: 'Biographie',
        value: localUser.bio,
        updateable: allowUpdate,
      }"
      :inputRules="['required']"
      @rulesNotMet="updateButtonDisabled = $event"
      @updated="
        (value: string) => {
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
      :disabled="updateButtonDisabled"
    />

    <OnclickButton
      v-if="allowUpdate"
      :onButtonClick="
        () => {
          if (localUser && props.user) {
            localUser = new UserModel(props.user);
          }

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
