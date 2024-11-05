import { reactive } from "vue";

type AuthState = {
  authenticated: boolean;
  token: string | null;
  username?: string | undefined;
};

const state = reactive<AuthState>({
  authenticated: false,
  token: null,
  username: undefined,
});

const login = (token: string, username: string | undefined) => {
  sessionStorage.setItem("token", token);
  sessionStorage.setItem("username", username || "");
  state.authenticated = true;
  state.token = token;
  state.username = username;
};

const logout = () => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("username");
  state.authenticated = false;
  state.token = null;
  state.username = undefined;
};

export function useAuth() {
  const token = sessionStorage.getItem("token");
  const username = sessionStorage.getItem("username");

  if (!state.authenticated) {
    if (token && username) {
      login(token, username);
    }
  }

  return {
    state,
    login,
    logout,
  };
}
