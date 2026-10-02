# TypeScript Set (with Examples)

Source code for the article [TypeScript Set (with Examples)](https://howtodoinjava.com/typescript/sets/).

## Versions

- TypeScript 7.0.2
- Node.js 22 or newer (needed for the ES2025 Set methods such as union() and intersection())

The tsconfig.json adds the "es2025.collection" library to "es2024" so that the compiler knows the new Set methods.

## Run

```bash
npm install
npm start
```

## Files

| File | Article section |
|---|---|
| src/00-quick-reference.ts | Quick reference snippet |
| src/01-create.ts | 1. Creating a Set and Typing Its Values |
| src/02-basic-operations.ts | 2. add(), has(), delete() and size |
| src/03-iterate.ts | 3. Looping Through a Set |
| src/04-convert.ts | 4. Set to Array, Array to Set and JSON |
| src/05-set-operations.ts | 5. Union, Intersection and Difference With the ES2025 Set Methods |
| src/06-objects.ts | 6. Which Values Count as Duplicates |
| src/07-readonly-weakset.ts | 7. ReadonlySet and WeakSet |
| src/index.ts | Runs all examples in order |
