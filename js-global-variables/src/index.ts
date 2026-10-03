import { quickReference } from "./00-quick-reference.js";
import { moduleScope } from "./01-module-scope.js";
import { globalThisExample } from "./02-global-this.js";
import { shadowing } from "./03-shadowing.js";
import { configModule } from "./04-config-module.js";
import { singletonCounter } from "./05-singleton-counter.js";
import { envVariables } from "./06-env-variables.js";

console.log("=== Quick reference ===");
quickReference();

console.log("=== Module scope ===");
moduleScope();

console.log("=== globalThis ===");
globalThisExample();

console.log("=== Shadowing ===");
shadowing();

console.log("=== Config module ===");
configModule();

console.log("=== Singleton counter ===");
singletonCounter();

console.log("=== Environment variables ===");
envVariables();
