# Jasmine Unit Testing Tutorial with TypeScript Examples

Source code for the article [Jasmine Unit Testing Tutorial with TypeScript Examples](https://howtodoinjava.com/typescript/jasmine-unit-testing-tutorial/).

A small shopping cart module (`src/cart.ts`) tested with Jasmine and TypeScript: matchers, hooks, spies,
async specs, the mock clock and a custom matcher.

## Versions

- Jasmine 7.0.0 (jasmine-core 7.0.2), @types/jasmine 7.0.0
- TypeScript 7.0.2
- Node.js 22 or newer (`npm run test:ts` and the demo scripts need Node.js 22.18 or newer, which strips TypeScript types by default)

## Run

```bash
npm install
npm test               # compile with tsc, then run the specs in dist/spec
npm run test:ts        # run the .ts specs directly with Node.js type stripping
npm run demo:hooks     # prints the order of beforeAll/beforeEach/afterEach/afterAll
npm run demo:failing   # a run with two failing specs and one pending spec (exit code 3)
npm run demo:focus     # fit() runs one spec, the run ends as "Incomplete" (exit code 2)
```

## Files

| File | Article section |
|---|---|
| `src/cart.ts` | The cart module under test |
| `spec/support/jasmine.mjs` | Jasmine config for the compiled specs in `dist/spec` |
| `spec/support/jasmine-ts.mjs` | Jasmine config for running `.ts` specs directly |
| `spec/cart.spec.ts` | describe/it, matchers, beforeEach |
| `spec/stock.spec.ts` | spyOn, and.returnValue, and.callFake, createSpyObj, expectAsync |
| `spec/expiry.spec.ts` | jasmine.clock() |
| `spec/helpers/matchers.ts` | Custom matcher `toHaveItem()` |
| `spec/matcher.spec.ts` | Uses the custom matcher |
| `demo/lifecycle.spec.ts` | Hook execution order |
| `demo/failing.spec.ts` | Failing and pending specs for the reporter output |
| `demo/focus.spec.ts` | fit and xdescribe |
