import { fromJS, List, Map } from 'immutable';

// Presistent Changes
console.log('Persisent Changes');

// set(index: number, value: T): List<T>
console.log('set()', List([1,2,3]).set(1,4));

// delete(index: number): List<T>
console.log('delete()', List([1,2,3]).delete(1));

// insert(index: number, value: T): List<T>
console.log('insert()', List([1,2,3]).insert(1,4));

// clear(): List<T>
console.log('clear()', List([1,2,3]).clear());

// push(...values: T[]): List<T>
console.log('push()', List([1,2,3]).push(4,5));

// pop(): List<T>
console.log('pop()', List([1,2,3]).pop());

// unshift(...values: T[]): List<T>
console.log('unshift()', List([1,2,3]).unshift(4,5));

// shift(): List<T>
console.log('shift()', List([1,2,3]).shift());

// update(updater: (value: List<T>) => List<T>): List<T>
// update(index: number, updater: (value: T) => T): List<T>
// update(index: number, notSetValue: T, updater: (value: T) => T): List<T>
console.log('update()', List([3,2,1]).update(x => x));
console.log('update()', List([3,2,1]).update(1, x => x*2));
console.log('update()', List([3,2,1]).update(3, 5, x => x*2));

// merge(...iterables: Iterable.Indexed<T>[]): List<T>
// merge(...iterables: Array<T>[]): List<T>
var c = fromJS({ a: { b: { c: 1 } } });
console.log('merge()', c.merge({b: {d: 2}}));
console.log('merge()', List([3,2,1]).merge([6,1]));

// mergeWith(
//   merger: (previous?: T, next?: T, key?: number) => T,
//   ...iterables: Iterable.Indexed<T>[]
// ): List<T>
// mergeWith(
//   merger: (previous?: T, next?: T, key?: number) => T,
//   ...iterables: Array<T>[]
// ): List<T>
var x = Map({a: 10, b: 20, c: 30});
var y = Map({b: 40, a: 50, d: 60});
// { "a": 0.2, "b": 0.5, "c": 30, "d": 60 }
console.log('mergeWith()', x.mergeWith((prev, next) => prev / next, y));

// mergeDeep(...iterables: Iterable.Indexed<T>[]): List<T>
// mergeDeep(...iterables: Array<T>[]): List<T>
var x = fromJS({a: { x: 10, y: 10 }, b: { x: 20, y: 50 } });
var y = fromJS({a: { x: 2 }, b: { y: 5 }, c: { z: 3 } });
console.log('mergeDeep()', x.mergeDeep(y));

// mergeDeepWith(
//   merger: (previous?: T, next?: T, key?: number) => T,
//   ...iterables: Iterable.Indexed<T>[]
// ): List<T>
// mergeDeepWith(
//   merger: (previous?: T, next?: T, key?: number) => T,
//   ...iterables: Array<T>[]
// ): List<T>
var x = fromJS({a: { x: 10, y: 10 }, b: { x: 20, y: 50 } });
var y = fromJS({a: { x: 11 }, b: { y: 52 }, c: { z: 3 } });
console.log('mergeDeepWith()', x.mergeDeepWith((prev, next) => prev > next ? prev : next, y));

// setSize(size: number): List<T>
console.log('setSize()', List([1,2,3]).setSize(2));
console.log('');

console.log('Transient changes');

// New immutable is created
// withMutations(mutator: (mutable: Map<K, V>) => any): Map<K, V>
// Note: Not all methods can be used on a mutable collection or within withMutations!
// Only set, push, pop, shift, unshift and merge may be used mutatively.
console.log('withMutations()', List().withMutations(list => {
  list.push(1).push(2)
}));

// asMutable(): List<T>
console.log('asMutable()', List([1,2,3]).asMutable());

// asImmutable(): List<T>
console.log('asImmutable()', List([1,2,3]).asImmutable());

console.log('');
