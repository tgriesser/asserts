## @tgriesser/asserts

Simple [TypeScript assertion](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions) functions:

```ts
asserts.string(val); // val is any

val; // val is string
```

```ts
asserts.string(val, 'Expected val to be string, saw '); // val is any

val; // val is string
```
