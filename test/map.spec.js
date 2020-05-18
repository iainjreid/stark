'use strict'

const S = require('../')

describe('map-clear', () => {
  it('removes all of the elements from the provided Map', () => {
    const map = new Map()

    map.set('foo', '1')
    map.set('bar', '2')

    expect(map.size).toEqual(2)
    S.Map.clear(map)
    expect(map.size).toEqual(0)
  })
})

describe('map-delete', () => {
  it('removes the element from the provided Map', () => {
    const map = new Map()

    map.set('foo', '1')
    map.set('bar', '2')

    expect(map.get('foo')).toEqual('1')
    expect(map.get('bar')).toEqual('2')
    S.Map.delete('foo', map)
    expect(map.get('foo')).toEqual(undefined)
    expect(map.get('bar')).toEqual('2')
  })

  it('returns true if the key exists and removes it from the provided Map', () => {
    const map = new Map()

    map.set('foo', '1')
    map.set('bar', '2')

    expect(map.get('foo')).toEqual('1')
    expect(map.get('bar')).toEqual('2')
    expect(S.Map.delete('bar', map)).toEqual(true)
    expect(map.get('foo')).toEqual('1')
    expect(map.get('bar')).toEqual(undefined)
  })

  it('returns false if the key doesn\'t exist in the provided Map', () => {
    const map = new Map()

    map.set('foo', '1')
    map.set('bar', '2')

    expect(map.get('foo')).toEqual('1')
    expect(map.get('bar')).toEqual('2')
    expect(S.Map.delete('baz', map)).toEqual(false)
    expect(map.get('foo')).toEqual('1')
    expect(map.get('bar')).toEqual('2')
  })
})

describe('map-entries', () => {
  it('returns an iterator object built from the provided Map', () => {
    const map = new Map()

    map.set('foo', '1')
    map.set('bar', '2')

    expect(Array.from(S.Map.entries(map))).toStrictEqual([
      ['foo', '1'],
      ['bar', '2'],
    ])
  })
})

describe('map-forEach', () => {
  it('calls the callback function for each key/value in the provided Map', () => {
    const fn = jest.fn()
    const map = new Map()

    map.set('foo', '1')
    map.set('bar', '2')

    S.Map.forEach(fn, map)
    expect(fn).toBeCalledTimes(2)
    expect(fn).toHaveBeenNthCalledWith(1, '1', 'foo', map)
    expect(fn).toHaveBeenNthCalledWith(2, '2', 'bar', map)
  })
})

describe('map-get', () => {
  it('gets a value from the provided Map', () => {
    const map = new Map()

    expect(S.Map.get('foo', map)).toEqual(undefined)
    map.set('foo', 'bar')
    expect(S.Map.get('foo', map)).toEqual('bar')
  })
})

describe('map-has', () => {
  const map = new Map()
  map.set('foo', '1')

  it('returns true if the key exists in the provided Map', () => {
    expect(S.Map.has('foo', map)).toBe(true)
  })

  it('returns false if the key does not exist in the provided Map', () => {
    expect(S.Map.has('bar', map)).toBe(false)
  })
})

describe('map-keys', () => {
  it('returns an iterator object containing the keys from the provided Map', () => {
    const map = new Map()

    map.set('foo', '1')
    map.set('bar', '2')

    expect(Array.from(S.Map.keys(map))).toStrictEqual([
      'foo',
      'bar',
    ])
  })
})

describe('map-set', () => {
  it('sets a value in the provided Map', () => {
    const map = new Map()

    expect(map.get('foo')).toEqual(undefined)
    S.Map.set('foo', 'bar', map)
    expect(map.get('foo')).toEqual('bar')
  })
})

describe('map-values', () => {
  it('returns an iterator object containing the values from the provided Map', () => {
    const map = new Map()

    map.set('foo', '1')
    map.set('bar', '2')

    expect(Array.from(S.Map.values(map))).toStrictEqual([
      '1',
      '2',
    ])
  })
})
