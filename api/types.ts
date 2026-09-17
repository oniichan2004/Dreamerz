export interface RegisterPayload {
  email: string;
  password: string;
}
export interface RegisterResponse {
  accessToken: string;
  refreshToken: string;
}
export interface RefreshResponse {
  accessToken: string;
  refreshToken: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}
export type LoginResponse = RegisterResponse;
