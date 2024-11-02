<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { User } from "../generated/user";
import UserApi from "../api/user.api";
import { useAuth } from "../state/useAuth";
import ErrorMessage from "../components/ErrorMessage.vue";
import UserPersonalInfoDisplay from "../widgets/UserPersonalInfo.vue";

const navBarItems = ["Informations personnelles", "Changer mon mot de passe"];
const selectedNavIndex = ref<number>(0);
const selectedNavItem = computed(() => navBarItems[selectedNavIndex.value]);

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
  <div class="container">
    <ErrorMessage v-if="errorMessage" :message="errorMessage" />

    <div class="main">
      <div class="user-details">
        <h2 class="nav-title">Navigation</h2>
        <nav>
          <ul>
            <li
              v-for="(navItem, index) in navBarItems"
              :key="index"
              @click="selectedNavIndex = index"
              :style="{ color: selectedNavIndex === index ? '#7289da' : '' }"
            >
              {{ navItem }}
            </li>
          </ul>
        </nav>
      </div>

      <UserPersonalInfoDisplay
        v-if="selectedNavItem === 'Informations personnelles'"
        :user="user"
        :updateMode="true"
        @updatedUser="user = $event"
      />

      <div v-else>
        <h2>Changer mon mot de passe</h2>
        <p>Work in progress...</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  color: #333;
}

.main {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.user-details {
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  min-width: 250px;
  max-height: 160px;
}

.user-details nav ul {
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 15px;
}

.nav-title {
  font-size: 1.5em;
  margin-bottom: 15px;
  color: #7289da;
  text-decoration: underline;
}

ul {
  list-style-type: none;
}

li {
  cursor: pointer;
}

li:hover {
  text-decoration: underline;
  color: #7289da;
}

@media screen and (min-width: 768px) {
  .main {
    flex-direction: row;
    gap: 40px;
  }

  .user-personal-info {
    width: 100%;
  }
}
</style>
