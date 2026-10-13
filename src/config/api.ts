export const API_BASE_URL =
  import.meta.env["VITE_API_BASE_URL"] ?? "https://noriwangyyamprem.netlify.app";

export const API_ENDPOINTS = {
  health: "/api/health",
  info: "/api/info",
  sendLink: "/api/send-link",
  verify: "/api/verify",
};
