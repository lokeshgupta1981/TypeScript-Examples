import { stripTypeScriptTypes } from "node:module";

const source = 'const total = (price: number, qty?: number): number => price * (qty ?? 1);';
const output = stripTypeScriptTypes(source);

console.log(output);
