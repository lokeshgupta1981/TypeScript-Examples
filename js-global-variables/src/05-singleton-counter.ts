import { nextRequest, currentCount } from "./counter.js";

export function singletonCounter(): void {
  nextRequest();
  nextRequest();
  const total = currentCount();                 // total = 2
  console.log("total =", total);
}
