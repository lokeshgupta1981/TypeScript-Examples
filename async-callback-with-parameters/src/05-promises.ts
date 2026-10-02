import { promisify } from "node:util";

const ages = new Map([["Lokesh", 37], ["Raj", 35]]);

function findAge(name: string, cb: (err: Error | null, age?: number) => void): void {
  setTimeout(() => {
    const age = ages.get(name);
    if (age === undefined) {
      cb(new Error("Not found: " + name));
    } else {
      cb(null, age);
    }
  }, 100);
}

export async function wrapInPromise(): Promise<void> {
  // 1. Wrap a callback API in a Promise
  function findAgeAsync(name: string): Promise<number> {
    return new Promise((resolve, reject) => {
      findAge(name, (err, age) => {
        if (err) {
          reject(err);
        } else {
          resolve(age!);
        }
      });
    });
  }

  // 2. Use it with then() and catch()
  await findAgeAsync("Lokesh").then((age) => console.log("then: " + age)); // then: 37
  await findAgeAsync("John").catch((err: Error) => console.log("catch: " + err.message)); // catch: Not found: John
}

export async function usePromisify(): Promise<void> {
  const findAgeP = promisify(findAge);          // (arg1: string) => Promise<number | undefined>
  const age = await findAgeP("Raj");            // age = 35
  console.log(age);
}
