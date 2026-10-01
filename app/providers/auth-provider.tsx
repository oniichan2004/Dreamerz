"use client";

import { createContext, useContext, useSyncExternalStore, type ReactNode } from "react";
import { login as loginRequest, register as registerRequest } from "@/api/requests";
import { clearTokens, getAccessToken, setTokens, subscribeToAuthChange } from "@/lib/auth-tokens";
import type {
  LoginPayload,
  LoginResponse,
  RegisterPayload,
  RegisterResponse,
} from "@/api/types";

interface AuthContextValue {
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (payload: LoginPayload) => Promise<LoginResponse>;
  register: (payload: RegisterPayload) => Promise<RegisterResponse>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

// `null` means "not yet known" — true during SSR and the first client render,
// before we're allowed to touch localStorage. useSyncExternalStore uses the
// server snapshot for both the SSR pass and the initial hydration pass, so no
// hydration mismatch occurs; it switches to the real client snapshot right after.
function getClientAuthSnapshot(): boolean | null {
  return !!getAccessToken();
}

function getServerAuthSnapshot(): boolean | null {
  return null;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const authSnapshot = useSyncExternalStore(
    subscribeToAuthChange,
    getClientAuthSnapshot,
    getServerAuthSnapshot,
  );

  const isLoading = authSnapshot === null;
  const isAuthenticated = authSnapshot === true;

  const login = async (payload: LoginPayload) => {
    const data = await loginRequest(payload);
    setTokens(data.accessToken, data.refreshToken);
    return data;
  };

  const register = async (payload: RegisterPayload) => {
    const data = await registerRequest(payload);
    setTokens(data.accessToken, data.refreshToken);
    return data;
  };

  const logout = () => {
    clearTokens();
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, isLoading, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
