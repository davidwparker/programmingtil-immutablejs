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

// Sequence algorithms
console.log('Sequence algorithms');

// map<M>(
//   mapper: (value?: V, key?: K, iter?: Iterable<K, V>) => M,
//   context?: any
// ): Iterable<K, M>
console.log('map:', Seq({ a: 1, b: 2 }).map(x => 10 * x));

// filter(
//   predicate: (value?: V, key?: K, iter?: Iterable<K, V>) => boolean,
//   context?: any
// ): Iterable<K, V>
console.log('filter:', Seq({a:1,b:2,c:3,d:4}).filter(x => x % 2 === 0));

// filterNot(
//   predicate: (value?: V, key?: K, iter?: Iterable<K, V>) => boolean,
//   context?: any
// ): Iterable<K, V>
console.log('filterNot:', Seq({a:1,b:2,c:3,d:4}).filter(x => x % 2 === 0));

// reverse(): Iterable<K, V>
console.log('reverse:', a.reverse());

// sort(comparator?: (valueA: V, valueB: V) => number): Iterable<K, V>
console.log('sort:', a.sort());

// sortBy<C>(
//   comparatorValueMapper: (value?: V, key?: K, iter?: Iterable<K, V>) => C,
//   comparator?: (valueA: C, valueB: C) => number
// ): Iterable<K, V>
console.log('sortBy:', a.sortBy());

// groupBy<G>(
//   grouper: (value?: V, key?: K, iter?: Iterable<K, V>) => G,
//   context?: any
// ): Seq.Keyed<G, Iterable<K, V>>
console.log('groupBy:', Seq({a:1,b:2,c:3,d:4}).filter(x => x % 2 === 0));
console.log('');

// Side Effects
console.log('Side Effects');

// forEach(
//   sideEffect: (value?: V, key?: K, iter?: Iterable<K, V>) => any,
//   context?: any
// ): number
const count = Seq({a:1,b:2,c:3,d:4}).forEach(x => (x < 3 ? x++ : false));
console.log('forEach:', count);
console.log('');

// Creating Subsets
console.log('Creating Subsets');

// slice(begin?: number, end?: number): Iterable<K, V>
console.log('slice:', a.slice(2));
console.log('slice:', a.slice(2, 4));
console.log('slice:', a.slice(-3));

// rest(): Iterable<K, V>
// all except first
console.log('rest:', a.rest());

// butLast(): Iterable<K, V>
// all except last
console.log('butLast:', a.butLast());

// skip(amount: number): Iterable<K, V>
// skips number and starts there
console.log('skip:', a.skip(2));

// skips number from the end and starts there
console.log('skipLast:', a.skipLast(2));

// skipWhile(
//   predicate: (value?: V, key?: K, iter?: Iterable<K, V>) => boolean,
//   context?: any
// ): Iterable<K, V>
//  starting from when predicate first returns false.
console.log('skipWhile:', a.skipWhile(x => Number.isInteger(x)));

// skipUntil(
//   predicate: (value?: V, key?: K, iter?: Iterable<K, V>) => boolean,
//   context?: any
// ): Iterable<K, V>
//  starting from when predicate first returns true.
console.log('skipUntil:', a.skipUntil(x => Number.isInteger(x)));

// take(amount: number): Iterable<K, V>
console.log('take:', a.take(3));

// takeLast(amount: number): Iterable<K, V>
console.log('takeLast:', a.takeLast(3));

// takeWhile(
//   predicate: (value?: V, key?: K, iter?: Iterable<K, V>) => boolean,
//   context?: any
// ): Iterable<K, V>
// entries from this Iterable as long as the predicate returns true.
console.log('takeWhile:', a.takeWhile(x => Number.isInteger(x)));

// takeUntil(
//   predicate: (value?: V, key?: K, iter?: Iterable<K, V>) => boolean,
//   context?: any
// ): Iterable<K, V>
// entries from this Iterable as long as the predicate returns false.
console.log('takeUntil:', a.takeUntil(x => Number.isInteger(x)));
console.log('');
