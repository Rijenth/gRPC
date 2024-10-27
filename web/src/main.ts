import { createApp, h } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/router";
import { provideAuth } from "./composables/useAuth";

createApp({
  setup() {
    provideAuth();
  },

  render: () => h(App),
})
  .use(router)
  .mount("#app");
