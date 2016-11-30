import { fromJS, List, Seq } from 'immutable';

// Constructors
// List<T>(): List<T>
// List<T>(iter: Iterable.Indexed<T>): List<T>
// List<T>(iter: Iterable.Set<T>): List<T>
// List<K, V>(iter: Iterable.Keyed<K, V>): List<any>
// List<T>(array: Array<T>): List<T>
// List<T>(iterator: Iterator<T>): List<T>
// List<T>(iterable: Object): List<T>
console.log('Constructors');
console.log('List()', List());
console.log('List<T> (set)', List(Seq({1: 'abc', 2:'def', 5:123, 'abc':455 })));
console.log('List<T> (set)', List([1,2,3]));
console.log('');
// etc

console.log('Static Methods');

// List.isList(maybeList: any): boolean
console.log('List.isList([..])', List.isList([1,2,3]));
console.log('List.isList(List(..))', List.isList(List([1,2,3])));

// List.of<T>(...values: T[]): List<T>
console.log('List.of()', List.of([1,2,3]));
console.log('');

console.log('Members');

// size: number
console.log('size', List([1,2,3]).size)
console.log('');

console.log('Deep persistent changes');
// Returns new lists
var a = List(Seq({
  1: 'abc',
  2:'def',
  5:123,
  'abc':455
}));
var b = List([1,2,3,4]);
var c = fromJS({ a: { b: { c: 1 } } });

// setIn(keyPath: Array<any>, value: any): List<T>
// setIn(keyPath: Iterable<any, any>, value: any): List<T>
console.log('setIn', a.setIn([4], 123));
console.log('setIn', b.setIn([3], 6));
console.log('setIn', c.setIn(['a', 'b', 'd'], 6));

// deleteIn(keyPath: Array<any>): List<T>
// deleteIn(keyPath: Iterable<any, any>): List<T>
console.log('deleteIn', a.deleteIn([3]));
console.log('deleteIn', b.deleteIn([3]));
console.log('deleteIn', c.deleteIn(['a', 'b', 'c']));

// updateIn(keyPath: Array<any>, updater: (value: any) => any): List<T>
// updateIn(
//   keyPath: Array<any>,
//   notSetValue: any,
//   updater: (value: any) => any
// ): List<T>
// updateIn(keyPath: Iterable<any, any>, updater: (value: any) => any): List<T>
// updateIn(
//   keyPath: Iterable<any, any>,
//   notSetValue: any,
//   updater: (value: any) => any
// ): List<T>
// Array --> uses indices
console.log('updateIn', b.updateIn([0], (x) => x*3 ));
console.log('updateIn', c.updateIn(['a', 'b', 'c'], (x) => x*3));

// mergeIn(
//   keyPath: Iterable<any, any>,
//   ...iterables: Iterable.Indexed<T>[]
// ): List<T>
// mergeIn(keyPath: Array<any>, ...iterables: Iterable.Indexed<T>[]): List<T>
// mergeIn(keyPath: Array<any>, ...iterables: Array<T>[]): List<T>
// combines updateIn and merge
console.log('mergeIn', c.mergeIn(['a', 'b', 'c'], 3));

// mergeDeepIn(
//   keyPath: Iterable<any, any>,
//   ...iterables: Iterable.Indexed<T>[]
// ): List<T>
// mergeDeepIn(keyPath: Array<any>, ...iterables: Iterable.Indexed<T>[]): List<T>
// mergeDeepIn(keyPath: Array<any>, ...iterables: Array<T>[]): List<T>
var d = fromJS({'d': 3});
console.log('mergeDeepIn', c.mergeDeepIn(['a', 'b'], d));

console.log('');
