import { quickReference } from "./00-quick-reference.js";
import { syncCallback, asyncCallback } from "./01-what-is-a-callback.js";
import { callbackTypes } from "./02-callback-types.js";
import { callerPassesArguments, extraArguments, genericCallback } from "./03-passing-parameters.js";
import { errorFirst } from "./04-error-first.js";
import { wrapInPromise, usePromisify } from "./05-promises.js";
import { asyncAwait, callbackToAwait } from "./06-async-await.js";
import { thisInCallbacks } from "./07-this.js";

const sections: [string, () => void | Promise<void>][] = [
  ["Quick reference", quickReference],
  ["Synchronous callback", syncCallback],
  ["Asynchronous callback", asyncCallback],
  ["Callback types", callbackTypes],
  ["The caller passes the arguments", callerPassesArguments],
  ["Passing our own arguments", extraArguments],
  ["Generic callback", genericCallback],
  ["Error-first callbacks", errorFirst],
  ["Wrapping a callback API in a Promise", wrapInPromise],
  ["util.promisify()", usePromisify],
  ["async/await", asyncAwait],
  ["async callback with Promise.all()", callbackToAwait],
  ["this in callbacks", thisInCallbacks],
];

// Waits until the timers started by a section have fired
const settle = (): Promise<void> => new Promise((resolve) => setTimeout(resolve, 300));

for (const [title, run] of sections) {
  console.log("=== " + title + " ===");
  await run();
  await settle();
}
