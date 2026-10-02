# TypeScript Method Override (with Examples)

Source code for the article [TypeScript Method Override (with Examples)](https://howtodoinjava.com/typescript/method-overriding-example/).

## Versions

- TypeScript 7.0.2
- Node.js 22 or newer

## Run

```bash
npm install
npm start
```

`npm start` compiles the project and prints the values shown in the article's snippet comments. The `tsconfig.json` enables `noImplicitOverride`, so removing an `override` keyword from the code makes the build fail.

## Files

| File | Article section |
|---|---|
| src/00-quick-reference.ts | Method overriding in one example |
| src/01-basic-override.ts | 1. Overriding a method in a subclass |
| src/02-super.ts | 3. Calling the parent method with super |
| src/03-signature-rules.ts | 4. Signature and visibility rules |
| src/04-abstract.ts | 5. Abstract methods that subclasses must override |
| src/index.ts | Runs all sections in order |
