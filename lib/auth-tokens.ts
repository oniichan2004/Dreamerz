export const ACCESS_TOKEN_KEY = "accessToken";
export const REFRESH_TOKEN_KEY = "refreshToken";

// Cookies are the single source of truth for auth state: proxy.ts runs on the
// server and can only read cookies, and client code (axios, AuthProvider) reads
// the very same cookies through document.cookie. They are not httpOnly because
// JS has to attach the Authorization header; the tokens were already readable
// by JS when they lived in localStorage, so the XSS exposure is unchanged.
function writeCookie(name: string, value: string | null) {
  const secure = location.protocol === "https:" ? "; secure" : "";
  document.cookie = value
    ? `${name}=${encodeURIComponent(value)}; path=/; samesite=lax${secure}`
    : `${name}=; path=/; max-age=0`;
}

function readCookie(name: string) {
  const prefix = `${name}=`;
  const entry = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith(prefix));
  return entry ? decodeURIComponent(entry.slice(prefix.length)) : null;
}

export function setTokens(accessToken: string, refreshToken: string) {
  writeCookie(ACCESS_TOKEN_KEY, accessToken);
  writeCookie(REFRESH_TOKEN_KEY, refreshToken);
}

export function clearTokens() {
  writeCookie(ACCESS_TOKEN_KEY, null);
  writeCookie(REFRESH_TOKEN_KEY, null);
}

export function getAccessToken() {
  return readCookie(ACCESS_TOKEN_KEY);
}

export function getRefreshToken() {
  return readCookie(REFRESH_TOKEN_KEY);
}
