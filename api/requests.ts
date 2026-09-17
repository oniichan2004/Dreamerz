import { api } from "./axios";

import type {
  RegisterPayload,
  RegisterResponse,
  LoginResponse,
  LoginPayload,
} from "./types";

export async function register(
  payload: RegisterPayload,
): Promise<RegisterResponse> {
  const { data } = await api.post<RegisterResponse>("/auth/register", payload);
  return data;
}

export async function login(payload: LoginPayload): Promise<LoginResponse> {
  const { data } = await api.post<LoginResponse>("/auth/login", payload);
  return data;
}
