import { api } from "./axios";

import type { RegisterPayload, RegisterResponse } from "./types";

export async function register(
  payload: RegisterPayload,
): Promise<RegisterResponse> {
  const { data } = await api.post<RegisterResponse>("/auth/register", payload);
  return data;
}
