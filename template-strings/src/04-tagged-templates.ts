function upper(strings: TemplateStringsArray, ...values: unknown[]): string {
  let result = strings[0];
  values.forEach((value, i) => {
    result += String(value).toUpperCase() + strings[i + 1];
  });
  return result;
}

export function taggedTemplates(): void {
  const name = "Lokesh";
  const city = "Delhi";

  // strings = ["", " lives in ", "."], values = ["Lokesh", "Delhi"]
  const message = upper`${name} lives in ${city}.`;   // message = "LOKESH lives in DELHI."

  // String.raw keeps backslashes
  const path = String.raw`C:\new\folder`;       // path = "C:\new\folder"
  const normal = `C:\new\folder`;               // \n becomes a line break

  console.log("message =", message);
  console.log("path =", path, "length", path.length, "| normal =", JSON.stringify(normal));

  // What a tag receives
  const inspect = (strings: TemplateStringsArray, ...values: unknown[]) => JSON.stringify({ strings, values });
  console.log(inspect`${name} lives in ${city}.`);
}
