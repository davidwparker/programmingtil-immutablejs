import { Set } from 'immutable';

// Construction
console.log('Construction');

const s = Set([1,2,3]);

// Set<T>(): Set<T>
// Set<T>(iter: Iterable.Set<T>): Set<T>
// Set<T>(iter: Iterable.Indexed<T>): Set<T>
// Set<K, V>(iter: Iterable.Keyed<K, V>): Set<any>
// Set<T>(array: Array<T>): Set<T>
// Set<T>(iterator: Iterator<T>): Set<T>
// Set<T>(iterable: Object): Set<T>
console.log(Set());
console.log('Set<T> (array)', s);
console.log('');

// Persistent Changes
console.log('Persistent Changes');

// clear(): Set<T>
console.log('clear', s.clear());

// add(value: T): Set<T>
console.log('add', s.add(4));

// delete(value: T): Set<T>
// Note: delete cannot be safely used in IE8
console.log('delete', s.delete(2));

// union(...iterables: Iterable<any, T>[]): Set<T>
// union(...iterables: Array<T>[]): Set<T>
// alias merge
console.log('union (array)', s.union([4,5]));
console.log('union (iterables)', s.union(Set([4,5])));

// intersect(...iterables: Iterable<any, T>[]): Set<T>
// intersect(...iterables: Array<T>[]): Set<T>
console.log('intersect (array)', s.intersect([3,4]));
console.log('intersect (iterables)', s.intersect(Set([1,4])));

// subtract(...iterables: Iterable<any, T>[]): Set<T>
// subtract(...iterables: Array<T>[]): Set<T>
console.log('subtract (array)', s.subtract([3,4]));
console.log('subtract (iterables)', s.subtract(Set([1,4])));

console.log('');
