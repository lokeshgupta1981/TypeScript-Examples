export const config = Object.freeze({
  appName: "Shop",
  apiBaseUrl: process.env.API_BASE_URL ?? "/api",
  featureFlags: Object.freeze({
    darkMode: process.env.DARK_MODE === "true",
    newCheckout: false,
  }),
});
