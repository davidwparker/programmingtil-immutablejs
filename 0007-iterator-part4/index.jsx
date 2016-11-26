import { Seq } from 'immutable';

var a = Seq({
  'hmm': undefined,
  11: 'abc',
  'abc': 455,
  'deep2': { 'in': { 'here': 'yesss' }},
  5: 123,
  'deep': Seq({ 'in': Seq({ 'here': 'yesss' }) }),
});

console.log(a);
console.log('');

// Combination
console.log('Combination');

// concat(...valuesOrIterables: any[]): Iterable<K, V>
console.log('concat:', a.concat(Seq({1:1})));

// flatten(depth?: number): Iterable<any, any>
// flatten(shallow?: boolean): Iterable<any, any>
console.log('flatten:', a.flatten(2));
console.log('flatten:', a.flatten(1));
console.log('flatten:', a.flatten(true)); // shallow flatten one level
console.log('flatten:', a.flatten(false));

// flatMap<MK, MV>(
//   mapper: (value?: V, key?: K, iter?: Iterable<K, V>) => Iterable<MK, MV>,
//   context?: any
// ): Iterable<MK, MV>
// flatMap<MK, MV>(
//   mapper: (value?: V, key?: K, iter?: Iterable<K, V>) => any,
//   context?: any
// ): Iterable<MK, MV>
// Similar to iter.map(...).flatten(true).
console.log('flatMap:', Seq({1:Seq({1:1}),2:Seq({2:2}),3:Seq({3:3})}).flatMap(x => x.map(y => y * 10)));
console.log('');

// Reducing a Value
console.log('Reducing a Value');

// reduce<R>(
//   reducer: (reduction?: R, value?: V, key?: K, iter?: Iterable<K, V>) => R,
//   initialReduction?: R, // if not included, first item in Iterable is used
//   context?: any
// ): R
console.log('reduce:', Seq({1:2, 2:3, 3:4}).reduce((x, y) => x + y));

// reduceRight<R>(
//   reducer: (reduction?: R, value?: V, key?: K, iter?: Iterable<K, V>) => R,
//   initialReduction?: R, // if not included, first item in Iterable is used
//   context?: any
// ): R
console.log('reduceRight:', Seq({1:2, 2:3, 3:4}).reduceRight((v, k) => v + k, 2));

// every(
//   predicate: (value?: V, key?: K, iter?: Iterable<K, V>) => boolean,
//   context?: any
// ): boolean
console.log('every:', Seq({1:2, 2:3, 3:4}).every((v, k) => {if (v >= 2) { return v; }}));
console.log('every:', Seq({1:2, 2:3, 3:4}).every((v, k) => {if (v > 2) { return v; }}));

// some(
//   predicate: (value?: V, key?: K, iter?: Iterable<K, V>) => boolean,
//   context?: any
// ): boolean
console.log('some:', Seq({1:2, 2:3, 3:4}).some((v, k) => {if (v >= 2) { return v; }}));
console.log('some:', Seq({1:2, 2:3, 3:4}).some((v, k) => {if (v > 4) { return v; }}));

// join(separator?: string): string
console.log('join:', a.join());

// isEmpty(): boolean
console.log('isEmpty:', a.isEmpty());

// count(): number
// count(
//   predicate: (value?: V, key?: K, iter?: Iterable<K, V>) => boolean,
//   context?: any
// ): number
console.log('count:', a.count());
console.log('count:', a.count(v => v === 123));

// countBy<G>(
//   grouper: (value?: V, key?: K, iter?: Iterable<K, V>) => G,
//   context?: any
// ): Map<G, number>
console.log('countBy:', a.countBy(v => v === 123));
console.log('');

// Search for Value
console.log('Search for Value');

// find(
//   predicate: (value?: V, key?: K, iter?: Iterable<K, V>) => boolean,
//   context?: any,
//   notSetValue?: V
// ): V
console.log('find:', a.find(v => v === 123));
console.log('find:', a.find(v => v === 1234));
console.log('find:', a.find(v => v === 1234, undefined, 1234));

// findLast(
//   predicate: (value?: V, key?: K, iter?: Iterable<K, V>) => boolean,
//   context?: any,
//   notSetValue?: V
// ): V
console.log('findLast:', Seq({123:123, 234:123}).findLast(v => v === 123));

// findEntry(
//   predicate: (value?: V, key?: K, iter?: Iterable<K, V>) => boolean,
//   context?: any,
//   notSetValue?: V
// ): Array<any>
console.log('findEntry:', Seq({123:123, 234:123}).findEntry(v => v === 123));

// findLastEntry(
//   predicate: (value?: V, key?: K, iter?: Iterable<K, V>) => boolean,
//   context?: any,
//   notSetValue?: V
// ): Array<any>
console.log('findLastEntry:', Seq({123:123, 234:123}).findLastEntry(v => v === 123));

// findKey(
//   predicate: (value?: V, key?: K, iter?: Iterable.Keyed<K, V>) => boolean,
//   context?: any
// ): K
console.log('findKey:', Seq({123:123, 234:123}).findKey(v => v === 123));

// findLastKey(
//   predicate: (value?: V, key?: K, iter?: Iterable.Keyed<K, V>) => boolean,
//   context?: any
// ): K
console.log('findLastKey:', Seq({123:123, 234:123}).findLastKey(v => v === 123));

// keyOf(searchValue: V): K
console.log('keyOf:', Seq({123:123, 234:123}).keyOf(123));

// lastKeyOf(searchValue: V): K
console.log('lastKeyOf:', Seq({123:123, 234:123}).lastKeyOf(123));

// max(comparator?: (valueA: V, valueB: V) => number): V
console.log('max:', Seq({123:123, 234:1234, 345:321}).max());

// maxBy<C>(
//   comparatorValueMapper: (value?: V, key?: K, iter?: Iterable<K, V>) => C,
//   comparator?: (valueA: C, valueB: C) => number
// ): V
console.log('maxBy:', Seq({123:123, 234:1234, 345:32}).maxBy((v) => v.toString().length, (a, b) => a < b));

// min(comparator?: (valueA: V, valueB: V) => number): V
console.log('min:', Seq({123:123, 234:1234, 345:321}).min());

// minBy<C>(
//   comparatorValueMapper: (value?: V, key?: K, iter?: Iterable<K, V>) => C,
//   comparator?: (valueA: C, valueB: C) => number
// ): V
console.log('minBy:', Seq({123:123, 234:1234, 345:321}).minBy());
console.log('');

// Comparison
console.log('Comparison');

// isSubset(iter: Iterable<any, V>): boolean
// isSubset(iter: Array<V>): boolean
console.log('isSubset:', Seq({123:123}).isSubset(Seq({123:123, 234:1234})));
console.log('isSubset:', Seq({123:123, 234:1234}).isSubset(Seq({123:123})));

// isSuperset(iter: Iterable<any, V>): boolean
// isSuperset(iter: Array<V>): boolean
console.log('isSuperset:', Seq({123:123}).isSuperset(Seq({123:123, 234:1234})));
console.log('isSuperset:', Seq({123:123, 234:1234}).isSuperset(Seq({123:123})));

console.log('');
