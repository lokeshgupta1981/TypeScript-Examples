// 1. interface Window: only through window
window.appName = "Shop";
const name1 = window.appName;                   // name1 = "Shop"

// 2. declare global var: every form works
window.featureFlags = { darkMode: true };
const dark1 = globalThis.featureFlags.darkMode; // dark1 = true
const dark2 = featureFlags.darkMode;            // dark2 = true

console.log(name1, dark1, dark2);

export {};
