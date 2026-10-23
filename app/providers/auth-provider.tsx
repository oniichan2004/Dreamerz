"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  login as loginRequest,
  register as registerRequest,
} from "@/api/requests";
import type { LoginPayload, RegisterPayload } from "@/api/types";
import { setTokens, clearTokens, getAccessToken } from "@/lib/auth-tokens";
import { refreshAccessToken } from "@/api/axios";
interface AuthContextValue {
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (payload: LoginPayload) => Promise<void>;
  register: (payload: RegisterPayload) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const syncAuthState = async () => {
      const accessToken = getAccessToken();

      // Dacă avem accessToken, userul este logat
      if (accessToken) {
        setIsAuthenticated(true);
        setIsLoading(false);
        return;
      }

      // Dacă NU avem accessToken,
      // încercăm să facem unul nou cu refreshToken
      try {
        await refreshAccessToken();

        setIsAuthenticated(true);
      } catch {
        clearTokens();

        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    syncAuthState();

    window.addEventListener("focus", syncAuthState);

    return () => {
      window.removeEventListener("focus", syncAuthState);
    };
  }, []);

  const login = async (payload: LoginPayload) => {
    const { accessToken, refreshToken } = await loginRequest(payload);
    setTokens(accessToken, refreshToken);
    setIsAuthenticated(true);
  };

  const register = async (payload: RegisterPayload) => {
    const { accessToken, refreshToken } = await registerRequest(payload);
    setTokens(accessToken, refreshToken);
    setIsAuthenticated(true);
  };

  const logout = () => {
    clearTokens();
    setIsAuthenticated(false);
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
