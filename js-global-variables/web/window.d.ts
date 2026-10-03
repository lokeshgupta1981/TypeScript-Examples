declare global {
  // Typed on window only: window.appName
  interface Window {
    appName: string;
  }

  // Typed everywhere: featureFlags, window.featureFlags, globalThis.featureFlags
  var featureFlags: { darkMode: boolean };
}

export {};
