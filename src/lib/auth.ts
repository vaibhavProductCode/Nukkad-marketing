const SESSION_KEY = "nk_session";

export function setSession() {
  if (typeof window === "undefined") return;
  localStorage.setItem(SESSION_KEY, "1");
}

export function clearSession() {
  if (typeof window === "undefined") return;
  try {
    localStorage.clear();
    sessionStorage.clear();
    document.cookie.split(";").forEach((c) => {
      document.cookie =
        c.trim().split("=")[0] + "=;expires=" + new Date(0).toUTCString() + ";path=/";
    });
  } catch (_) {}
}

export function hasSession(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(SESSION_KEY) === "1";
}
