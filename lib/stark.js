'use strict'

function base(fn, arity = fn.length) {
  const o = function() {
    const args = Array.prototype.slice.call(arguments, 0, arity)

    return arguments.length >= arity
      ? fn.apply(this, args)
      : o.P.apply(this, args);
  }

  /**
   * Flip the expected order of arguments.
   */
  Object.defineProperty(o, 'F', {
    get() {
      return base((...args) => fn(...args.reverse()), arity);
    },
  });

  /**
   * Change the arity of the function.
   */
  Object.defineProperty(o, 'N', {
    value: (n) => {
      return base(fn, n);
    },
  });

  /**
   * Partially apply a given set of arguments.
   */
  Object.defineProperty(o, 'P', {
    value: (...argsA) => {
      return base((...argsB) => fn(...argsA, ...argsB), arity - argsA.length);
    },
  });

  return o;
}

const arityMap = new WeakMap()

arityMap.set(Array.prototype.copyWithin, 4)
arityMap.set(Array.prototype.reduce, 3)

module.exports = new Proxy(global, {
  get(obj, prop) {
    if (obj[prop] && obj[prop].prototype) {
      return wrap(obj[prop])
    }
  },
})

  
function wrap(target) {
  return new Proxy(target.prototype, {
    get(obj, prop) {
      if (obj[prop]) {
        return base((data, ...args) => {
          return obj[prop].apply(data, args.reverse())
        }).F.N(arityMap.get(obj[prop]) || obj[prop].length + 1)
      } else {
        throw (`Unknown method '${prop}' on object '${target.name}'`)
      }
    },
  })
}