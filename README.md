# Stark

## Introduction

Stark is a simple library that turns the JavaScript built-in objects into
individual suites of composable, functional methods. It's tiny (around 1KB) and
unopinionated.

It works by flipping the methods exposed through the prototypes of every
built-in object, so that they expect the subject of the operation to appear at
the _end_ of the arguments list. Here's a working comparison...

```javascript
const arr = ['hello', 'world']

# Plain JavaScript
arr.join(' ') //  => "hello world"

# With Stark
join(' ', arr) // => "hello world"
```

You can think of Stark as a sort of packet mix, providing the core ingredients
required to build a fully-fledged functional programming library.

## Features

* Built-in currying and partial application.
* Not a single variadic function in sight.
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
