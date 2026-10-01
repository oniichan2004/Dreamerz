export const ACCESS_TOKEN_KEY = "accessToken";
export const REFRESH_TOKEN_KEY = "refreshToken";

// middleware.ts runs on the server and can only read cookies, not
// localStorage, so the access token is mirrored into a plain cookie purely
// for route-redirect checks. The real auth header for API calls still comes
// from localStorage (see api/axios.ts); the token is already exposed to JS
// there, so mirroring it into a non-httpOnly cookie doesn't change what an
// XSS attacker could already read.
function setAccessTokenCookie(accessToken: string | null) {
  const secure = location.protocol === "https:" ? "; secure" : "";
  document.cookie = accessToken
    ? `${ACCESS_TOKEN_KEY}=${accessToken}; path=/; samesite=lax${secure}`
    : `${ACCESS_TOKEN_KEY}=; path=/; max-age=0`;
}

export function setTokens(accessToken: string, refreshToken: string) {
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
  localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
  setAccessTokenCookie(accessToken);
}

export function clearTokens() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
  setAccessTokenCookie(null);
}

export function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

export function getRefreshToken() {
  return localStorage.getItem(REFRESH_TOKEN_KEY);
}
