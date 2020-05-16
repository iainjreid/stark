'use strict'

const S = require('../')

describe('array-concat', () => {
    it('merges two arrays', () => {
      expect(S.Array.concat([4, 5, 6], [1, 2, 3])).toEqual([1, 2, 3, 4, 5, 6])
    })
  })

  describe('array-copyWithin', () => {
    it('copies an array chunk to a given index', () => {
      expect(S.Array.copyWithin(0, 1, 3, [1, 2, 3])).toEqual([2, 3, 3])
    })
  })

  describe('array-entries', () => {
    it('creates an iterator from an array', () => {
      expect(typeof S.Array.entries([1, 2, 3])[Symbol.iterator]).toEqual('function')
    })
  })

  describe('array-every', () => {
    it('check that all elements in an array pass a given condition', () => {
      expect(S.Array.every((elem) => elem > 0, [1, 2, 3])).toEqual(true)
    })
  })

  describe('array-fill', () => {
    it('fills an array with the provided value', () => {
      expect(S.Array.fill(1, Array(5))).toStrictEqual([1, 1, 1, 1, 1])
    })
  })

  describe('array-filter', () => {
    it('removes non-truthy elements from an array', () => {
      expect(S.Array.filter((elem) => elem, [1, 0, 0, 1, 1])).toEqual([1, 1, 1])
    })
  })

  describe('array-find', () => {
    it('finds the first element in an array that matches the given condition', () => {
      expect(S.Array.find((elem) => elem.endsWith('r'), ['foo', 'bar', 'baz'])).toEqual('bar')
    })
  })

  describe('array-findIndex', () => {
    it('finds the first element in an array that matches the given condition', () => {
      expect(S.Array.findIndex((elem) => elem.endsWith('z'), ['foo', 'bar', 'baz'])).toEqual(2)
    })
  })

  describe('array-flat', () => {
    const arr = [
      [1],
      [[2]],
      [[[3]]]
    ]

    it('flattens an array with a given depth (1)', () => {
      expect(S.Array.flat(1, arr)).toEqual([1, [2], [[3]]])
    })

    it('flattens an array with a given depth (2)', () => {
      expect(S.Array.flat(2, arr)).toEqual([1, 2, [3]])
    })

    it('flattens an array with a given depth (3)', () => {
      expect(S.Array.flat(3, arr)).toEqual([1, 2, 3])
    })
  })

  describe('array-flatMap', () => {
    it('correctly maps a function over an array and then flattens the result', () => {
      expect(S.Array.flatMap((elem, i) => [elem, elem + i], [1, 2, 3])).toEqual([1, 1, 2, 3, 3, 5])
    })
  })

  describe('array-forEach', () => {
    it('executes the provided function for each element in an array', () => {
      let acc = 0
      S.Array.forEach((elem) => acc += elem, [1, 2, 3])
      expect(acc).toEqual(6)
    })
  })

  describe('array-map', () => {
    it('correctly maps a function over an array', () => {
      expect(S.Array.map((elem, i) => elem + i, [1, 2, 3])).toEqual([1, 3, 5])
    })

    it('correctly maps a function over an array (when curried)', () => {
      expect(S.Array.map((elem, i) => elem + i)([1, 2, 3])).toEqual([1, 3, 5])
    })
  })

  describe('array-reduce', () => {
    it('correctly reduces an array', () => {
      expect(S.Array.reduce((acc, elem) => acc + elem, 0, [1, 2, 3])).toEqual(6)
    })
  })

  describe('array-some', () => {
    it('check that no elements in an array pass a given condition', () => {
      expect(S.Array.some((elem) => elem > 2, [1, 2, 3])).toEqual(true)
    })
  })
