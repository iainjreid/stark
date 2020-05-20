# Stark

## Introduction

Stark is a functional programming library that wraps all of the core JavaScript
built-in objects with a tiny, but hugely powerful functional wrapper. Weighing
less than 1KB when minified, and exposing almost 300 methods, Stark is the one
of the lightest functional programming libraries around.

## Features

* Built-in currying and partial application.
* No variadic functions in sight.
* Argument flipping out of the box.

## Using Stark

To use Stark in your project you should first install it as a dependency.

```bash
# For NPM users
npm i @emphori/stark

# Or, for Yarn users
yarn add @emphori/stark
```

### Unpacking the library

Stark organises its methods according to the type of data that they operate on,
for example, the `map` method can be found at `S.Array.map`, the `startsWith`
method can be found at `S.String.startsWith`, etc.

Whilst the simplest way to get started would be to reference each method using
their full lookup paths like in the examples above, unpacking the methods you
need before using them is a useful trick.

```javascript
const stark = require('@emphori/stark')

const {
  Array: { map },
  String: { startsWith },
} = stark
```

## FAQ

### Why should I avoid unpacking Stark when requiring it?

Stark is a dynamically built library from the ground up and doesn't declare any
named exports, only a default export. So to answer this question is to relay a
key distinction between [ESM imports][2] and [object destructuring][2].

```javascript
// ✔️ CommonJS (works)
const { Array: { map } } = require('@emphori/stark')

// ❌ ESM imports (doesn't work)
import { Array: { map } } from '@emphori/stark'
```

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
[2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

As you can see in the example above, CommonJS introps nicely with the
structuring of Stark's internals, but ESM imports sadly do not.

## License

This project is released under the [MIT License](./LICENSE). Enjoy responsibly ✌️
