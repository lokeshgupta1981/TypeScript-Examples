export function envVariables(): void {
  // 1. Strings or undefined
  const apiBaseUrl = process.env.API_BASE_URL ?? "/api";   // "/api" when not set

  // 2. Convert flags and numbers yourself
  const darkMode = process.env.DARK_MODE === "true";       // false when not set
  const maxUsers = Number(process.env.MAX_USERS ?? "10");  // maxUsers = 10

  console.log("apiBaseUrl =", apiBaseUrl, "| darkMode =", darkMode, "| maxUsers =", maxUsers);
}
