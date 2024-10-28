<script setup lang="ts">
import { ref } from "vue";
import EmitButton from "../components/EmitButton.vue";
import ErrorMessage from "../components/ErrorMessage.vue";
import { useAuth } from "../state/useAuth";
import LabelledInput from "../components/LabelledInput.vue";

const auth = useAuth();
const username = ref("");
const password = ref("");
const errorMessage = ref("");

const handleLogin = async () => {
  errorMessage.value = "";

  if (!username.value || !password.value) {
    errorMessage.value = "Veuillez remplir tous les champs";
    return;
  }

  setTimeout(() => {
    if (username.value !== "admin") {
      errorMessage.value = "Nom d'utilisateur ou mot de passe incorrect";
      return;
    }
    auth.login(username.value);
  }, 1000);
};
</script>

<template>
  <div class="login-box">
    <h2>Connexion</h2>

    <ErrorMessage v-if="errorMessage" :message="errorMessage" />

    <LabelledInput
      label="Nom d'utilisateur"
      id="username"
      type="text"
      v-model="username"
      placeholder="Entrez votre nom d'utilisateur"
    />

    <LabelledInput
      label="Mot de passe"
      id="password"
      type="password"
      v-model="password"
      placeholder="Entrez votre mot de passe"
    />

    <EmitButton :onButtonClick="handleLogin" text="Se connecter" />
  </div>
</template>

<style scoped>
.login-box {
  display: flex;
  flex-direction: column;
  align-items: left;
  min-width: 300px;
  padding: 20px;
  border: 1px solid #7289da;
  border-radius: 8px;
}

h2 {
  margin-bottom: 20px;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-size: 18px;
  color: #666;
}

input {
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 14px;
  box-sizing: border-box;
}
</style>
