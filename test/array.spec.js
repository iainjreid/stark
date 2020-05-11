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
  
  describe('array-filter', () => {
    it('removes non-truthy elements from an array', () => {
      expect(S.Array.filter((elem) => elem, [1, 0, 0, 1, 1])).toEqual([1, 1, 1])
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