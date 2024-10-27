import { reactive, provide, inject } from "vue";

type AuthState = {
  authenticated: boolean;
  token: string | null;
};

const authSymbol = Symbol();

export function provideAuth() {
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

  provide(authSymbol, {
    state,
    login,
    logout,
  });

  return { ...state, login, logout };
}

type AuthContext = {
  state: AuthState;
  login: (token: string) => void;
  logout: () => void;
};

export function useAuth() {
  const auth = inject(authSymbol) as AuthContext | undefined;

  if (!auth) {
    throw new Error("useAuth must be used within a provider");
  }

  return auth;
}
