import { reactive } from "vue";

type AuthState = {
  authenticated: boolean;
  token: string | null;
};

const state = reactive<AuthState>({
  authenticated: false,
  token: null,
});

const login = (token: string) => {
  state.authenticated = true;
  state.token = token;
};

const logout = () => {
  state.authenticated = false;
  state.token = null;
};

export function useAuth() {
  return {
    state,
    login,
    logout,
  };
}
