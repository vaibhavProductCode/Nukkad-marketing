const SESSION_KEY = "nk_session";
const PROFILE_KEY = "nk_profile";

export interface UserProfile {
  businessName: string;
  businessType: string;
  city: string;
  language: string;
  brandColor: string;
}

export function setSession() {
  if (typeof window === "undefined") return;
  localStorage.setItem(SESSION_KEY, "1");
}

export function hasSession(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(SESSION_KEY) === "1";
}

export function setProfile(profile: UserProfile) {
  if (typeof window === "undefined") return;
  localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
}

export function getProfile(): UserProfile | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(PROFILE_KEY);
    return raw ? (JSON.parse(raw) as UserProfile) : null;
  } catch {
    return null;
  }
}

export function hasProfile(): boolean {
  if (typeof window === "undefined") return false;
  return !!localStorage.getItem(PROFILE_KEY);
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
