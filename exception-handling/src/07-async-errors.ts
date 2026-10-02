export async function asyncErrors(): Promise<void> {
  function wait(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const ages = new Map([["Lokesh", 37], ["Raj", 35]]);

  async function findAge(name: string): Promise<number> {
    await wait(50);
    const age = ages.get(name);
    if (age === undefined) {
      throw new Error("Not found: " + name);
    }
    return age;
  }

  // 1. await inside try/catch
  try {
    await findAge("John");
  } catch (err) {
    console.log(err instanceof Error ? err.message : err); // Not found: John
  }

  // 2. catch() on the Promise
  const age = await findAge("John").catch(() => 0); // age = 0
  console.log(age);

  // 3. Several calls: allSettled() keeps every result
  const results = await Promise.allSettled([findAge("Lokesh"), findAge("John")]);
  const states = results.map((r) => r.status);  // states = ["fulfilled", "rejected"]
  console.log(states);
}

export async function missingAwait(): Promise<void> {
  async function fail(): Promise<number> {
    throw new Error("async failure");
  }

  // Without await, the catch block never sees the error
  let caught = false;
  let promise: Promise<number> | undefined;
  try {
    promise = fail();                           // no await
  } catch {
    caught = true;
  }
  console.log(caught);                          // false
  await promise?.catch((err: Error) => console.log("handled later: " + err.message)); // handled later: async failure
}
