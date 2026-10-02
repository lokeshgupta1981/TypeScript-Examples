export async function asyncAwait(): Promise<void> {
  // 1. Delay helper that returns a Promise
  function wait(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const ages = new Map([["Lokesh", 37], ["Raj", 35]]);

  async function findAge(name: string): Promise<number> {
    await wait(100);
    const age = ages.get(name);
    if (age === undefined) {
      throw new Error("Not found: " + name);
    }
    return age;
  }

  // 2. Sequential calls read top to bottom
  const lokesh = await findAge("Lokesh");       // lokesh = 37
  const raj = await findAge("Raj");             // raj = 35
  console.log(lokesh + raj);                    // 72

  // 3. Parallel calls with Promise.all()
  const both = await Promise.all([findAge("Lokesh"), findAge("Raj")]); // both = [37, 35]
  console.log(both);

  // 4. Errors with try/catch
  try {
    await findAge("John");
  } catch (err) {
    console.log((err as Error).message);        // Not found: John
  }
}

export async function callbackToAwait(): Promise<void> {
  // An async function used where a callback is expected
  function wait(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const names = ["Lokesh", "Raj"];
  const upper = await Promise.all(
    names.map(async (name) => {
      await wait(50);
      return name.toUpperCase();
    }),
  );                                            // upper = ["LOKESH", "RAJ"]
  console.log(upper);
}
