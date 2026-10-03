import { config } from "./config.js";

export function configModule(): void {
  // 1. Read values
  const name = config.appName;                  // name = "Shop"
  const dark = config.featureFlags.darkMode;    // dark = false

  // 2. Writes fail
  // config.appName = "Blog";                   // error TS2540
  // config.featureFlags.darkMode = true;       // error TS2540

  // 3. Shallow freeze leaves nested objects writable
  const shallow = Object.freeze({ featureFlags: { darkMode: false } });
  shallow.featureFlags.darkMode = true;         // allowed, darkMode = true

  console.log("name =", name, "| dark =", dark, "| apiBaseUrl =", config.apiBaseUrl);
  console.log("shallow =", JSON.stringify(shallow));
  try {
    (config as { appName: string }).appName = "Blog";
  } catch (e) {
    console.log(String(e));
  }
}
