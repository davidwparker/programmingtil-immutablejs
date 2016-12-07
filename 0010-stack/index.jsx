import { Stack } from 'immutable';

// Construction
console.log('Construction');

// Stack<T>(): Stack<T>
// Stack<T>(iter: Iterable.Indexed<T>): Stack<T>
// Stack<T>(iter: Iterable.Set<T>): Stack<T>
// Stack<K, V>(iter: Iterable.Keyed<K, V>): Stack<any>
// Stack<T>(array: Array<T>): Stack<T>
// Stack<T>(iterator: Iterator<T>): Stack<T>
// Stack<T>(iterable: Object): Stack<T>
console.log(Stack());
console.log('Stack<T> (array)', Stack([1,2,3]));
console.log('');

// Static methods
console.log('Static Methods');

// Stack.isStack(maybeStack: any): boolean
console.log('Stack.isStack([..])', Stack.isStack([1,2,3]));
console.log('Stack.isStack(Stack(..))', Stack.isStack(Stack([1,2,3])));

// Stack.of<T>(...values: T[]): Stack<T>
console.log('Stack.of()', Stack.of([1,2,3]));

console.log('');

// Members
console.log('Members');

// via Collection
// size: number
console.log('size', Stack([1,2,3]).size);

console.log('');

// Reading Values
console.log('Reading Values');

// peek(): T
// Alias for Stack.first()
console.log('peek()', Stack([1,2,3]).peek());

// Inherited from Iterable:
// get(key: number, notSetValue?: T): T
// has(key: number): boolean
// includes(value: T): boolean
// first(): T
// last(): T

console.log('');

// Persistent Changes
console.log('Persistent Changes');

// clear(): Stack<T>
console.log('clear', Stack([1,2,3]).clear());

// unshift(...values: T[]): Stack<T>
// very efficient for stacks
console.log('unshift', Stack([1,2,3]).unshift(4,5))

// unshiftAll(iter: Iterable<any, T>): Stack<T>
// unshiftAll(iter: Array<T>): Stack<T>
console.log('unshiftAll', Stack([1,2,3]).unshiftAll([5,6]));

// shift(): Stack<T>
// Note: this differs from Array#shift because it returns a new Stack rather
// than the removed value. Use first() or peek() to get the first value in this Stack.
console.log('shift', Stack([1,2,3]).shift());

// push(...values: T[]): Stack<T>
// alias for unshift- not the same as List#push

// pushAll(iter: Iterable<any, T>): Stack<T>
// pushAll(iter: Array<T>): Stack<T>
// alias unshiftAll

// pop(): Stack<T>
// alias for shift- not the same as List#pop
console.log('');

// Transient Changes
console.log('Transient Changes');
console.log('See list map part 2 screencast');
console.log('');

// Remainder
console.log('Conversion to Seq');
console.log('Values Equality');
console.log('Reading deep values');
console.log('Conversion to Collections');
console.log('Iterators');
console.log('Iterables (Seq)');
console.log('Sequence Algorithms');
console.log('Side Effects');
console.log('Creating subsets');
console.log('Combination');
console.log('Reducing a value');
console.log('Search for value');
console.log('Comparison');
console.log('See various "iterator" screencasts (should be iterable)');

console.log('');
