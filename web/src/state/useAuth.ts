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
  state.authenticated = true;
  state.token = token;
  state.username = username;
};

const logout = () => {
  state.authenticated = false;
  state.token = null;
  state.username = undefined;
};

export function useAuth() {
  return {
    state,
    login,
    logout,
  };
}
