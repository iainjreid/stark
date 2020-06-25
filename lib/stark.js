'use strict'

const rules = new WeakMap([
  [ Array.prototype.copyWithin,      4 ],
  [ Array.prototype.flat,            2 ],
  [ Array.prototype.reduce,          3 ],
  [ Array.prototype.reduceRight,     3 ],
  [ Array.prototype.slice,           3 ],
  [ Array.prototype.splice,          4 ],
  [ Array.prototype.toLocaleString,  3 ],
  [ String.prototype.split,          2 ],
])

const base = (fn, arity) => {
  const exec = (...args) => {
    args = args.slice(0, arity)

    return args.length == arity
      ? fn(...args)
      : exec.partial(...args);
  }

  return Object.assign(exec, {
    /**
     * Flip the expected order of arguments.
     */
    flip() {
      return base((...args) => fn(...args.reverse()), arity);
    },

    /**
     * Change the arity of the function.
     */
    arity(n) {
      return base(fn, n)
    },

    /**
     * Partially apply a given set of arguments.
     */
    partial(...argsA) {
      return base((...argsB) => fn(...argsA, ...argsB), arity - argsA.length);
    },
  })
}

const wrap = (target) => {
  return new Proxy(target.prototype, {
    get(obj, prop) {
      if (obj[prop]) {
        const fn = obj[prop]
        return base((data, ...args) => fn.apply(data, args.reverse()), rules.get(fn) || fn.length + 1).flip()
      } else {
        throw `Unknown method '${prop}' on object '${target.name}'`
      }
    },
  })
}

module.exports = new Proxy(global, {
  get(obj, prop) {
    if (obj[prop] && obj[prop].prototype) {
      return wrap(obj[prop])
    }
  },
})
