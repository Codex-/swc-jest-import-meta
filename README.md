# swc-jest-import-meta

> Reproduction of the `import.meta` transpiling issue when using `@swc` with `Jest`

## To encounter the issue

```shell
npm run test
```

## Output

```
    if (import.meta.env.MODE === "test") {
               ^^^^

    SyntaxError: Cannot use 'import.meta' outside a module

       7 |
       8 | describe("App", () => {
    >  9 |   it("renders the app", () => {
         |                                                     ^
      10 |     render(
      11 |       <MemoryRouter>
      12 |         <App />

      at Runtime.createScriptFromCode (node_modules/jest-runtime/build/index.js:1496:14)
      at Object.<anonymous> (src/App.spec.tsx:9:53)
```

## Keywords

Cannot use 'import.meta' outside a module, import, meta, vite, jest, swc, @swc, @swc/jest
